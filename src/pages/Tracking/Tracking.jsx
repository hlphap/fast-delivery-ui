import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import dateFormat from "dateformat";

import styles from "./Tracking.module.scss";

import Apple from "../../assets/data/Icons/Apple.png";
import GGPlay from "../../assets/data/Icons/GGPlay.png";
import logo from "../../assets/img/Pháp Heo.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { Button, InfoGroup, TextInput, Grid } from "../../components";
import axios from "axios";

function Tracking() {
  const [orderID, setOrderID] = useState("");
  const [tracking, setTracking] = useState();
  const [order, setOrder] = useState({});

  const handleTracking = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/orders/tracking/${orderID}`)
      .then((res) => {
        setTracking(res.data.tracking);
        setOrder(res.data.order);
      });
  };

  console.log(order);
  return (
    <>
      <div className={styles.header}>
        <div className={clsx(styles.headerTop, "container")}>
          <span>Bấm để tải ứng dụng FastDelivery</span>
          <div className={styles.textLogo}>
            <img src={Apple} alt="" />
            <span>App Store</span>
          </div>
          <div className={styles.textLogo}>
            <img src={GGPlay} alt="" />
            <span>Google Play</span>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.header__menu}>
            <div className={styles.header__menu__left}>
              <div className={styles.header__menu__left__logo}>
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className={styles.header__menu__right}>
              <input
                value={orderID}
                onChange={(e) => setOrderID(e.target.value)}
                style={{ width: "250px", marginRight: "10px" }}
                type="text"
                placeholder="Nhập mã đơn hàng cần tra cứu"
              />
              <Button size="sm" onClick={handleTracking}>
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
      </div>
      {tracking && order && (
        <div className={clsx(styles.body, "container")}>
          <InfoGroup title="Ước lượng thời gian giao hàng">
            <div className={styles.estimate}>
              <p>
                Ngày lấy hàng {order.createdAt && order.createdAt}, dự kiến giao
                hàng trước {2} ngày kể từ ngày nhận hàng
              </p>
            </div>
          </InfoGroup>
          <InfoGroup title="Lịch sử theo dõi đơn hàng">
            {tracking.map((tracking, index) => (
              <div key={index} className={styles.trackingOrder}>
                <div className={styles.oneTracking}>
                  <div className={styles.timeTracking}>
                    <AccessTimeIcon style={{ fill: "#fa4a0c" }} />
                    <h2>{tracking.timeStamp}</h2>
                  </div>
                  <p>Name status: {tracking.status.name}</p>
                  <p>Note: {tracking.status.note}</p>
                </div>
              </div>
            ))}
          </InfoGroup>
          <InfoGroup title="Thông tin đơn hàng">
            <div className={styles.infoOrder}>
              <Grid col={2}>
                <div>
                  <TextInput
                    title="Tên đơn hàng"
                    name="orderName"
                    value={order?.orderName}
                    disabled
                  />
                  <TextInput
                    title="Phương thức vận chuyển"
                    value={order?.useDVMethod?.name}
                  />
                </div>
                <TextInput
                  styles={{ width: "200px" }}
                  title="Địa chỉ giao hàng"
                  value={order?.receiverAddress?.fullAddress}
                />
              </Grid>
            </div>
          </InfoGroup>
        </div>
      )}
    </>
  );
}

export default Tracking;
