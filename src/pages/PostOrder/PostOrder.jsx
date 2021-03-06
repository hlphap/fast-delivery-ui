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
      toast.error("Ch??a nh???p ?????a ch??? ng?????i nh???n");
      return;
    }
    if (!data.weight) {
      toast.error("Ch??a nh???p kh???i l?????ng");
      return;
    }
    if (!data.dvMethod) {
      toast.error("Ch??a ch???n ph????ng th???c v???n chuy???n");
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
      toast.error("Ch??a nh???p th??ng tin ????n h??ng");
      return;
    }
    if (!postOrder.orderName) {
      toast.error("Ch??a nh???p t??n ????n h??ng");
      return;
    }
    if (!postOrder.weight) {
      toast.error("Ch??a nh???p kh???i l?????ng");
      return;
    }
    if (!postOrder.receiverName) {
      toast.error("Ch??a nh???p t??n ng?????i nh???n");
      return;
    }
    if (!postOrder.receiverPhone) {
      toast.error("Ch??a nh???p s??? ??i???n tho???i ng?????i nh???n");
      return;
    }
    if (!postOrder.receiverPhone) {
      toast.error("Ch??a nh???p ?????a ch??? email ng?????i nh???n");
      return;
    }
    if (!postOrder.receiverAddress.ward) {
      toast.error("Ch??a ch???n ph?????ng/ x??");
      return;
    }
    if (!postOrder.receiverAddress.noteAddress) {
      toast.error("Ch??a nh???p ?????a ch??? c??? th???");
      return;
    }
    if (!postOrder.useDVMethod) {
      toast.error("Ch??a ch???n ph????ng th???c v???n chuy???n");
      return;
    }
    toast.promise(
      axios.post(process.env.REACT_APP_API_URL + "/orders", postOrder),
      {
        pending: "??ang t???o ????n h??ng",
        success: "T???o ????n h??ng th??nh c??ng",
        error: "T???o ????n h??ng th???t b???i",
      }
    );
  };

  return (
    <div className={clsx(styles.postOrder, "container")}>
      <h1>????ng ????n h??ng</h1>
      <Grid col={3} mdCol={2} smCol={1} gap={10}>
        <div>
          <TextInput
            title="T??n ????n h??ng"
            name="orderName"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Kh???i l?????ng"
            name="weight"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Ti???n thu h???"
            name="orderMoney"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Ghi ch??"
            name="note"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <TextInput
            title="T??n ng?????i nh???n"
            name="receiverName"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="S??? ??i???n tho???i"
            name="receiverPhone"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Email"
            name="receiverEmail"
            onChange={(e) => handleOnChange(e)}
          />
          <SelectInput
            title="T???nh/ Qu???n"
            name="district"
            options={districts}
            onChange={(e) => handleOnChange(e)}
          />
          <SelectInput
            title="Ph?????ng/ X??"
            name="ward"
            options={wards}
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="?????a ch??? chi ti???t"
            name="noteAddress"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <SelectInput
            title="Ph????ng th???c v???n chuy???n"
            name="dvMethod"
            options={dvMethods}
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Ph?? giao h??ng"
            name="orderName"
            disabled
            value={fee?.standard}
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Ph??? ph??"
            name="orderName"
            value={fee?.surCharge}
            disabled
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Gi???m theo ch??nh s??ch"
            name="orderName"
            value={fee?.commission}
            disabled
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="T???ng ph?? giao h??ng"
            disabled
            value={fee?.total}
            name="orderName"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </Grid>
      <div className={styles.btnAddOrder}>
        <Button size="sm" onClick={getFee}>
          T??nh ph??
        </Button>
        <Button size="sm" onClick={handlePostOrder}>
          Th??m ????n h??ng
        </Button>
      </div>
    </div>
  );
};

export default PostOrder;
