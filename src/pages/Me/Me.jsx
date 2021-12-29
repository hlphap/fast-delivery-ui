import { Grid, TextInput, SelectInput, Button } from "../../components";
import styles from "./Me.module.scss";

const Me = () => {
  return (
    <div className={styles.me}>
      <h1>Thông tin cửa hàng</h1>
      <Grid col={2} mdCol={2} smCol={1} gap={10}>
        <div>
          <TextInput title="Tên cửa hàng" name="orderName" />
          <TextInput title="Email" name="orderName" />
          <TextInput title="Số điện thoại" name="orderName" />
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
