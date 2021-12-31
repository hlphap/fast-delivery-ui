import { Link } from "react-router-dom";
import clsx from "clsx";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import localStorage from "local-storage";

import logo from "../../../assets/img/Pháp Heo.png";
import Apple from "../../../assets/data/Icons/Apple.png";
import GGPlay from "../../../assets/data/Icons/GGPlay.png";

import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Sortdown from "../../../assets/data/Icons/SortDown.png";
import Settings from "@mui/icons-material/Settings";
import Button from "../../Button/Button";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isLogin, setIsLogin] = useState(localStorage.get("store"));

  useEffect(() => {
    setIsLogin(isLogin);
  }, [isLogin]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.remove("store");
    localStorage.remove("token");
    localStorage.remove("storeID");
    setIsLogin(null);
  };

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
            <div className={styles.header__menu__left__link}>
              <Link to="/tracking">Tra cứu đơn hàng</Link>
            </div>
            <div className={styles.header__menu__left__link}>
              <a href="https://ghn.vn/blogs/tuyen-dung">Tuyển dụng</a>
            </div>
            <div className={styles.header__menu__left__link}>Về chúng tôi</div>
          </div>

          <div className={styles.header__menu__right}>
            {!isLogin && (
              <Button size="sm">
                <Link to="/login">Đăng nhập/Đăng ký</Link>
              </Button>
            )}

            {isLogin && (
              <div style={{ display: "inline-flex" }}>
                <div className={styles.HeaderLeftProfile}>
                  <button
                    onClick={handleClick}
                    style={{ fontWeight: 700, marginRight: "0.8rem" }}
                  >
                    Long Pháp
                  </button>
                  <img src={Sortdown}></img>
                </div>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem sx={{ fontSize: "16px" }}>
                    <ListItemIcon>
                      <CalendarTodayIcon fontSize="large" />
                    </ListItemIcon>
                    <Link to="/store" className={styles.HeaderLeftProfileMenu}>
                      Quản lý đơn hàng
                    </Link>
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem sx={{ fontSize: "16px" }}>
                    <ListItemIcon>
                      <Settings fontSize="large" />
                    </ListItemIcon>
                    <Link
                      to="/store/me"
                      className={styles.HeaderLeftProfileMenu}
                    >
                      Cài đặt tài khoản
                    </Link>
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem sx={{ fontSize: "16px" }} onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="large" />
                    </ListItemIcon>
                    Đăng xuất
                  </MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
