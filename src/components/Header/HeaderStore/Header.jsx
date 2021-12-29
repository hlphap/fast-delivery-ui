import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import logo from "../../../assets/img/Pháp Heo.png";

import Button from "../../Button/Button";

function Header() {
  return (
    <div className={styles.header}>
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
            <input type="text" placeholder="Nhập mã đơn hàng cần tra cứu" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
