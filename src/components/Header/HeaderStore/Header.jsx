import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Header.module.scss";
import Apple from "../../../assets/data/Icons/Apple.png";
import GGPlay from "../../../assets/data/Icons/GGPlay.png";
import logo from "../../../assets/img/Pháp Heo.png";

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
              <Link to="/store/">Quản lý đơn hàng</Link>
            </div>
            <div className={styles.header__menu__left__link}>
              <Link to="/store/money-management">Quản lý dòng tiền</Link>
            </div>
            <div className={styles.header__menu__left__link}>
              <Link to="/store/commission">Chính sách hoa hồng</Link>
            </div>
            <div className={styles.header__menu__left__link}>
              <Link to="/store/me">Thông tin cửa hàng</Link>
            </div>
          </div>
          <div className={styles.header__menu__right}>
            <Button size="sm">
              <Link to="/store/post">Đăng đơn hàng mới</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
