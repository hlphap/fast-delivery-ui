import React from 'react'
import Grid from '../components/Grid'
import Button from '../components/Button'
import LoRe from '../components/LoRe'

const Login = () => {
    return (
        <div className='login'>
            <div className="intro">
                <h2>Đăng ký thành viên FastDelivery - Tích điểm thưởng và nhận ưu đãi</h2>
                <p>Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền lợi.</p>
            </div>
            <Grid col={2} mdCol={2} smCol={1} gap={20}>
                <LoRe/>
                <div className="login__form">
                    <h2>Đăng nhập</h2>
                    <p>Đăng nhập Fast Delivery để trải nghiệm</p>
                    <div className="login__field">
                        <i className='login__icon bx bx-mail-send' ></i>
                        <input type="text" className="login__input" placeholder="Địa chỉ Email" />
                    </div>
                    <div className="login__field">
                        <i className='login__icon bx bx-lock-alt' ></i>
                        <input type="password" className="login__input" placeholder="Mật khẩu" />
                    </div>
                    <Button>đăng nhập</Button>
                    <p>Quên mật khẩu? <span>Nhấn vào đây</span></p>
                    <p>Bạn chưa có tài khoản FastDelivery? <span>Đăng ký</span></p>
                </div>
            </Grid>
        </div>
    )
}

export default Login
