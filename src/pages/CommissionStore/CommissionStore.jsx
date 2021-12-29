import styles from "./CommissionStore.module.scss";

import { Grid, SelectInput, TextInput, Button } from "../../components";

const CommissionStore = () => {
  return (
    <div className={styles.orderManagement}>
      <h1>Chính sách hoa hồng cửa hàng đang thụ hưởng</h1>
      <Grid col={2} mdCol={1} smCol={1} gap={10}>
        <div>
          <TextInput title="Tên chính sách hoa hồng" name="orderName" />
          <TextInput
            title="Số lượng đơn hàng tối thiểu/ tháng"
            name="orderName"
          />
          <TextInput title="Tỉ giá khuyến mãi" name="orderName" />
          <TextInput title="Mô tả" name="orderName" type="text-area" />
        </div>
        <div></div>
      </Grid>
      <Button size="sm">Tìm kiếm</Button>
    </div>
  );
};

export default CommissionStore;
