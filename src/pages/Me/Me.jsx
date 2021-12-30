import { useState, useEffect } from "react";
import clsx from "clsx";
import localStorage from "local-storage";
import { toast } from "react-toastify";
import axios from "axios";

import { Grid, TextInput, SelectInput, Button } from "../../components";
import styles from "./Me.module.scss";

const Me = () => {
  const [store, setStore] = useState(() => localStorage.get("store"));

  const handleOnChange = (e) => {
    const newData = {
      ...store,
      [e.target.name]: e.target.value,
    };
    setStore(newData);
  };

  const handleUpdate = () => {
    toast.promise(
      axios
        .put(
          `${process.env.REACT_APP_API_URL}/stores/${localStorage.get(
            "storeID"
          )}`,
          store
        )
        .then((res) => {
          localStorage.set("store", res.data.updatedStore);
          localStorage.set("storeID", res.data.updatedStore._id);
        }),
      {
        pending: "Đang cập nhật thông tin",
        success: "Cập nhật thành công",
        error: "Cập nhật thất bại",
      }
    );
  };

  return (
    <div className={clsx(styles.me, "container")}>
      <h1>Thông tin cửa hàng</h1>
      <Grid col={3} mdCol={2} smCol={1} gap={10}>
        <div>
          <TextInput
            title="Tên cửa hàng"
            name="name"
            value={store.name}
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Email"
            name="email"
            value={store.email}
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Số điện thoại"
            name="phone"
            value={store.phone}
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Số chứng minh nhân dân"
            name="accountNumber"
            value={store.accountNumber}
            onChange={(e) => handleOnChange(e)}
          />
          <Button size="sm" onClick={handleUpdate}>
            Lưu
          </Button>
        </div>
        <div>
          <SelectInput
            title="Tỉnh/ Quận"
            name="name"
            valueShow={store.address.ward.district.name}
          />
          <SelectInput
            title="Phường/ Xã"
            name="name"
            valueShow={store.address.ward.name}
          />
          <TextInput
            title="Địa chỉ chi tiết"
            name="accountNumber"
            value={store.address.noteAddress}
            disabled
          />
        </div>
        <div>
          <TextInput
            title="Tên tài khoản ngân hàng"
            name="accountNumber"
            value={store.accountName}
            disabled
          />
          <TextInput
            title="Chi nhánh"
            name="accountNumber"
            value={store.branchBank}
            disabled
          />
          <TextInput
            title="Ngân hàng"
            name="accountNumber"
            value={store.bank.vnName}
            disabled
          />
        </div>
      </Grid>
    </div>
  );
};

export default Me;
