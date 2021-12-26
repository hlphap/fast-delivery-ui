import React, { useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
// logo
import logo from "../assets/img/Pháp Heo.png"
import Button from "./Button"


const Header = () => {
  

  return (
    <div className='header'>
        <div className='container'>
          <div className='header__menu'>
            <div className="header__menu__left">
                <div className='header__menu__left__logo'>
                    <Link to='/'>
                        <img src={logo} alt='' />
                    </Link>
                </div>
                <div className='header__menu__left__link'>trang chủ</div>
                <div className='header__menu__left__link'>dịch vụ</div>
                <div className='header__menu__left__link'>tuyển dụng</div>
                <div className='header__menu__left__link'>về chúng tôi</div>
            </div>
            <div className="header__menu__right">
                <Button size="sm" >Đăng nhập/Đăng ký</Button>
                <input type="text" placeholder="Nhập mã đơn hàng cần tra cứu"/>
            </div>
          </div>          
        </div>
    </div>
  )
}

export default Header
