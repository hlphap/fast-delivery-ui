import styles from "./OrderManagement.module.scss";

import { Grid, SelectInput, TextInput, Button } from "../../components";

const OrderManagement = () => {
  return (
    <div className={styles.orderManagement}>
      <h1>Quản lý đơn hàng</h1>
      <Grid col={3} mdCol={2} smCol={1} gap={10}>
        <div>
          <TextInput title="Tên đơn hàng" name="orderName" />
          <TextInput title="Khối lượng" name="orderName" />
          <TextInput title="Tiền thu hộ" name="orderName" />
          <TextInput title="Ghi chú" name="orderName" />
        </div>
        <div>
          <TextInput title="Tên người nhận" name="orderName" />
          <TextInput title="Số điện thoại" name="orderName" />
          <SelectInput title="Tỉnh/ Quận" name="orderName" />
          <SelectInput title="Phường/ Xã" name="orderName" />
          <TextInput title="Ghi chú" name="orderName" />
        </div>
        <div>
          <SelectInput title="Phương thức vận chuyển" name="orderName" />
          <TextInput title="Phí giao hàng" name="orderName" />
          <TextInput title="Phụ phí" name="orderName" />
          <TextInput title="Giảm theo chính sách" name="orderName" />
          <TextInput title="Tổng phí giao hàng" name="orderName" />
        </div>
      </Grid>
      <Button size="sm">Tìm kiếm</Button>
    </div>
  );
};

export default OrderManagement;
