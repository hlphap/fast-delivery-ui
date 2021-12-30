import React from "react";
import "./LoRe.module.scss";

import Coins from "../../assets/img/coins@2x 1.png";
import Wallet from "../../assets/img/wallet@2x 1.png";
import Backpack from "../../assets/img/backpack@2x 1.png";
import Sale from "../../assets/img/top-sales@2x 1.png";
import ItemIntroduce from "../ItemIntroduce/ItemIntroduce";

const LoRe = () => {
  const styles = {
    groupItem: {
      marginTop: "65px",
      width: "80rem",
    },
  };
  return (
    <div style={styles.groupItem}>
      <div style={{ display: "inline-block" }}>
        <ItemIntroduce image={Coins} title="Tích điểm nhanh chóng">
          <span>Tích điểm đối với mỗi lượt đặt chỗ thành công.</span>
          <br />
          <span>Quy đổi thành Lux Credit để du lịch nhiều hơn nữa.</span>
        </ItemIntroduce>
      </div>

      <div style={{ marginLeft: "60px", display: "inline-block" }}>
        <ItemIntroduce image={Wallet} title="Thanh toán đơn giản">
          <span>Phương thức thanh toán tiện lợi, an toàn.</span>
          <br />
          <span>Tích hợp chức năng lưu thẻ để đặt phòng lần sau.</span>
        </ItemIntroduce>
      </div>

      <div style={{ display: "inline-block", marginTop: "64px" }}>
        <ItemIntroduce image={Backpack} title="Ưu đãi mỗi ngày">
          <span>
            Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch để lựa chọn
            và đặt ngay cho mình một chỗ ở phù hợp, tiện nghi với giá tốt nhất.
          </span>
        </ItemIntroduce>
      </div>

      <div
        style={{
          marginLeft: "60px",
          display: "inline-block",
          marginTop: "64px",
          paddingBottom: "154px",
        }}
      >
        <ItemIntroduce image={Sale} title="Tiện ích thông minh">
          <span>
            Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết nối
            mạng. Hoàn tiền nhanh gọn.{" "}
          </span>
          <br />
          <span>Đổi lịch dễ dàng.</span>
        </ItemIntroduce>
      </div>
    </div>
  );
};

export default LoRe;
