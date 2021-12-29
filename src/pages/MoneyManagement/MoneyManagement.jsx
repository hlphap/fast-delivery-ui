import styles from "./MoneyManagement.module.scss";

import { Grid, TextInput } from "../../components";

const MoneyManagement = () => {
  return (
    <div className={styles.moneyManagement}>
      <div className={styles.calendarManager}>
        <TextInput title="Từ ngày" type="date" />
        <TextInput title="Đến ngày" type="date" />
      </div>
      <Grid col={2} mdCol={2} smCol={1} gap={10}>
        <div className={styles.statistic}>
          <h1>Thống kê đơn hàng đã giao</h1>
          <TextInput title="Tiền thu hộ" name="orderName" disabled />
          <TextInput title="Phí giao hàng" name="orderName" disabled />
          <TextInput title="Phụ phí" name="orderName" disabled />
          <TextInput
            title="Khuyến mãi theo chính sách"
            name="orderName"
            disabled
          />
          <TextInput
            title="Phí thay đổi địa chỉ giao hàng"
            name="orderName"
            disabled
          />
          <TextInput title="Phí trả hàng" name="orderName" disabled />
          <TextInput title="Tổng tiền giao hàng" name="orderName" disabled />
        </div>
        <div className={styles.statistic}>
          <h1>Thống kê đơn hàng đang giao</h1>
          <TextInput title="Tiền thu hộ" name="orderName" disabled />
          <TextInput title="Phí giao hàng" name="orderName" disabled />
          <TextInput title="Phụ phí" name="orderName" />
          <TextInput
            title="Khuyến mãi theo chính sách"
            name="orderName"
            disabled
          />
          <TextInput
            title="Phí thay đổi địa chỉ giao hàng"
            name="orderName"
            disabled
          />
          <TextInput title="Phí trả hàng" name="orderName" disabled />
          <TextInput title="Tổng tiền giao hàng" name="orderName" disabled />
        </div>
      </Grid>
    </div>
  );
};

export default MoneyManagement;
