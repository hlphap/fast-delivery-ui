import clsx from "clsx";
import localStorage from "local-storage";
import styles from "./CommissionStore.module.scss";
import { Grid, TextInput } from "../../components";

const CommissionStore = () => {
  const commission = localStorage.get("store").commission;
  return (
    <div className={clsx(styles.commissionStore, "container")}>
      <h1>Chính sách hoa hồng cửa hàng đang thụ hưởng</h1>
      <Grid col={2} mdCol={1} smCol={1} gap={10}>
        <div>
          <TextInput
            title="Tên chính sách hoa hồng"
            name="orderName"
            disabled
            value={commission.name}
          />
          <TextInput
            title="Số lượng đơn hàng tối thiểu/ tháng"
            name="orderName"
            disabled
            value={commission.orderPerMonthMin + " đơn hàng"}
          />

          <TextInput
            title="Tỉ giá khuyến mãi"
            name="orderName"
            disabled
            value={commission.ratioCommission + " %/ đơn giao"}
          />
          <TextInput
            title="Mô tả"
            name="orderName"
            type="text-area"
            disabled
            value={commission.note}
          />
        </div>
        <div></div>
      </Grid>
    </div>
  );
};

export default CommissionStore;
