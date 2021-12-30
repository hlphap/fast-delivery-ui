import clsx from "clsx";
import { useState, useEffect } from "react";
import localStorage from "local-storage";
import styles from "./MoneyManagement.module.scss";

import { Grid, TextInput } from "../../components";
import axios from "axios";

const MoneyManagement = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/stores/${localStorage.get(
          "storeID"
        )}/statistics`
      )
      .then((res) => {
        setData(res.data.statistics);
      });
  }, []);

  console.log(data);

  return (
    <div className={clsx(styles.moneyManagement, "container")}>
      {/* <div className={styles.calendarManager}>
        <TextInput title="Từ ngày" type="date" />
        <TextInput title="Đến ngày" type="date" />
      </div> */}
      <Grid col={2} mdCol={2} smCol={1} gap={10}>
        <div className={styles.statistic}>
          <h1>Thống kê đơn hàng đã giao</h1>
          <TextInput
            title="Tiền thu hộ"
            name="orderName"
            disabled
            value={data?.delivered.orderMoney}
          />
          <TextInput
            title="Phí giao hàng"
            name="orderName"
            disabled
            value={data?.delivered.standard}
          />
          <TextInput
            title="Phụ phí"
            name="orderName"
            disabled
            value={data?.delivered.surCharge}
          />
          <TextInput
            title="Khuyến mãi theo chính sách"
            name="orderName"
            disabled
            value={data?.delivered.commission}
          />
          <TextInput
            title="Phí thay đổi địa chỉ giao hàng"
            name="orderName"
            disabled
            value={data?.delivered.changeAddressDelivery}
          />
          <TextInput
            title="Phí trả hàng"
            name="orderName"
            disabled
            value={data?.delivered.return}
          />
          <TextInput
            title="Tổng tiền giao hàng"
            name="orderName"
            disabled
            value={data?.delivered.total}
          />
        </div>
        <div className={styles.statistic}>
          <h1>Thống kê đơn hàng đang giao</h1>
          <TextInput
            title="Tiền thu hộ"
            name="orderName"
            disabled
            value={data?.delivering.orderMoney}
          />
          <TextInput
            title="Phí giao hàng"
            name="orderName"
            disabled
            value={data?.delivering.standard}
          />
          <TextInput
            title="Phụ phí"
            name="orderName"
            disabled
            value={data?.delivering.surCharge}
          />
          <TextInput
            title="Khuyến mãi theo chính sách"
            name="orderName"
            disabled
            value={data?.delivering.commission}
          />
          <TextInput
            title="Phí thay đổi địa chỉ giao hàng"
            name="orderName"
            disabled
            value={data?.delivering.changeAddressDelivery}
          />
          <TextInput
            title="Phí trả hàng"
            name="orderName"
            disabled
            value={data?.delivering.return}
          />
          <TextInput
            title="Tổng tiền giao hàng"
            name="orderName"
            disabled
            value={data?.delivering.total}
          />
        </div>
      </Grid>
    </div>
  );
};

export default MoneyManagement;
