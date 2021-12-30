import { useState } from "react";
import clsx from "clsx";
import localStorage from "local-storage";
import { Grid, TextInput, SelectInput, Button } from "../../components";
import styles from "./Me.module.scss";

const Me = () => {
  const [store, setStore] = useState(localStorage.get("store"));

  console.log(store);
  return (
    <div className={clsx(styles.me, "container")}>
      <h1>Thông tin cửa hàng</h1>
      <Grid col={2} mdCol={2} smCol={1} gap={10}>
        <div>
          <TextInput title="Tên cửa hàng" name="orderName" value={store.name} />
          <TextInput title="Email" name="orderName" value={store.email} />
          <TextInput
            title="Số điện thoại"
            name="orderName"
            value={store.phone}
          />
          <SelectInput title="Tỉnh/ Quận" name="orderName" />
          <SelectInput title="Phường/ Xã" name="orderName" />
          <SelectInput title="Địa chỉ chi tiết" name="orderName" />
          <Button size="sm">Lưu</Button>
        </div>
      </Grid>
    </div>
  );
};

export default Me;
