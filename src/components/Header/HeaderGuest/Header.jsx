import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Header.module.scss";

import logo from "../../../assets/img/Pháp Heo.png";
import Apple from "../../../assets/data/Icons/Apple.png";
import GGPlay from "../../../assets/data/Icons/GGPlay.png";

import Button from "../../Button/Button";

function Header() {
  return (
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
            <div className={styles.header__menu__left__link}>
              <Link to="/">Trang chủ</Link>
            </div>
            <div className={styles.header__menu__left__link}>Dịch vụ</div>
            <div className={styles.header__menu__left__link}>Tuyển dụng</div>
            <div className={styles.header__menu__left__link}>Về chúng tôi</div>
          </div>
          <div className={styles.header__menu__right}>
            <Button size="sm">
              <Link to="/login">Đăng nhập/Đăng ký</Link>
            </Button>
            <input type="text" placeholder="Nhập mã đơn hàng cần tra cứu" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
