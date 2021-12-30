import { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import localStorage from "local-storage";
import { toast } from "react-toastify";

import styles from "./PostOrder.module.scss";
import { Grid, SelectInput, TextInput, Button } from "../../components";

const PostOrder = () => {
  const [data, setData] = useState({});
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [dvMethods, setDVMethods] = useState([]);
  const [fee, setFee] = useState();
  let postOrder;

  const handleOnChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  postOrder = {
    ownerStoreID: localStorage.get("store")._id,
    orderName: data.orderName ? data.orderName : null,
    weight: data.weight ? data.weight : null,
    orderMoney: data.orderMoney ? Number(data.orderMoney) : 0,
    note: data.note ? data.note : "",
    receiverName: data.receiverName ? data.receiverName : null,
    receiverPhone: data.receiverPhone ? data.receiverPhone : null,
    receiverEmail: data.receiverEmail ? data.receiverEmail : null,
    receiverAddress: {
      fullAddress: "",
      noteAddress: data.noteAddress ? data.noteAddress : null,
      ward: data.ward ? JSON.parse(data.ward) : null,
    },
    useDVMethod: data.dvMethod ? JSON.parse(data.dvMethod) : null,
    useCommission: false,
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

  const getFee = () => {
    if (!data.ward) {
      toast.error("Chưa nhập địa chỉ người nhận");
      return;
    }
    if (!data.weight) {
      toast.error("Chưa nhập khối lượng");
      return;
    }
    if (!data.dvMethod) {
      toast.error("Chưa chọn phương thức vận chuyển");
      return;
    }
    axios
      .post(process.env.REACT_APP_API_URL + "/orders/fee", postOrder)
      .then((response) => {
        setFee(response.data.fee);
      })
      .catch((err) => console.log(err.response.data.errorMessage));
  };

  const handlePostOrder = () => {
    if (!postOrder.ownerStoreID) {
      toast.error("Chưa nhập thông tin đơn hàng");
      return;
    }
    if (!postOrder.orderName) {
      toast.error("Chưa nhập tên đơn hàng");
      return;
    }
    if (!postOrder.weight) {
      toast.error("Chưa nhập khối lượng");
      return;
    }
    if (!postOrder.receiverName) {
      toast.error("Chưa nhập tên người nhận");
      return;
    }
    if (!postOrder.receiverPhone) {
      toast.error("Chưa nhập số điện thoại người nhận");
      return;
    }
    if (!postOrder.receiverPhone) {
      toast.error("Chưa nhập địa chỉ email người nhận");
      return;
    }
    if (!postOrder.receiverAddress.ward) {
      toast.error("Chưa chọn phường/ xã");
      return;
    }
    if (!postOrder.receiverAddress.noteAddress) {
      toast.error("Chưa nhập địa chỉ cụ thể");
      return;
    }
    if (!postOrder.useDVMethod) {
      toast.error("Chưa chọn phương thức vận chuyển");
      return;
    }
    toast.promise(
      axios.post(process.env.REACT_APP_API_URL + "/orders", postOrder),
      {
        pending: "Đang tạo đơn hàng",
        success: "Tạo đơn hàng thành công",
        error: "Tạo đơn hàng thất bại",
      }
    );
  };

  return (
    <div className={clsx(styles.postOrder, "container")}>
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
          <TextInput
            title="Email"
            name="receiverEmail"
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
            value={fee?.standard}
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Phụ phí"
            name="orderName"
            value={fee?.surCharge}
            disabled
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Giảm theo chính sách"
            name="orderName"
            value={fee?.commission}
            disabled
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Tổng phí giao hàng"
            disabled
            value={fee?.total}
            name="orderName"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </Grid>
      <div className={styles.btnAddOrder}>
        <Button size="sm" onClick={getFee}>
          Tính phí
        </Button>
        <Button size="sm" onClick={handlePostOrder}>
          Thêm đơn hàng
        </Button>
      </div>
    </div>
  );
};

export default PostOrder;
