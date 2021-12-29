import styles from "./PostOrder.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import { Grid, SelectInput, TextInput, Button } from "../../components";

const PostOrder = () => {
  const [data, setData] = useState({});
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [dvMethods, setDVMethods] = useState([]);
  const [fee, setFee] = useState();

  const handleOnChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  //Get data districts + dvMethod
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/districts")
      .then((res) => {
        setDistricts(res.data.districts);
      })
      .catch((err) => {
        throw new Error(err);
      });
    axios
      .get(process.env.REACT_APP_API_URL + `/dvmethods`)
      .then((res) => {
        setDVMethods(res.data.dvMethods);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  //Get data wards
  useEffect(() => {
    const districtID = data.district ? JSON.parse(data.district)._id : "";
    districtID &&
      axios
        .get(process.env.REACT_APP_API_URL + `/districts/${districtID}/wards`)
        .then((res) => {
          setWards(res.data.wards);
        })
        .catch((err) => {
          throw new Error(err);
        });
  }, [data.district]);

  //Get fee
  useEffect(() => {}, [data.district, data.ward, data.dvMethod]);

  return (
    <div className={styles.postOrder}>
      <h1>Đăng đơn hàng</h1>
      <Grid col={3} mdCol={2} smCol={1} gap={10}>
        <div>
          <TextInput
            title="Tên đơn hàng"
            name="orderName"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Khối lượng"
            name="weight"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Tiền thu hộ"
            name="orderMoney"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Ghi chú"
            name="note"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <TextInput
            title="Tên người nhận"
            name="receiverName"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Số điện thoại"
            name="receiverPhone"
            onChange={(e) => handleOnChange(e)}
          />
          <SelectInput
            title="Tỉnh/ Quận"
            name="district"
            options={districts}
            onChange={(e) => handleOnChange(e)}
          />
          <SelectInput
            title="Phường/ Xã"
            name="ward"
            options={wards}
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Địa chỉ chi tiết"
            name="noteAddress"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <SelectInput
            title="Phương thức vận chuyển"
            name="dvMethod"
            options={dvMethods}
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Phí giao hàng"
            name="orderName"
            disabled
            valueDisabled="123"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Phụ phí"
            name="orderName"
            disabled
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Giảm theo chính sách"
            name="orderName"
            disabled
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Tổng phí giao hàng"
            disabled
            name="orderName"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </Grid>
      <Button className={styles.btnAddOrder} size="sm">
        Thêm đơn hàng
      </Button>
    </div>
  );
};

export default PostOrder;
