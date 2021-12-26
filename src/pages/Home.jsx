import React from 'react'

import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/data/hero-slider'

import Grid from '../components/Grid'
import Button from '../components/Button'

import post from '../assets/img/list-post-offices.jpg'
import banner from '../assets/img/banner.jpg'

const Home = () => {
    return (
        <div className='home'>
            <HeroSlider data={heroSliderData} control={true}/>
            <div className="policy-card">
                <div className="policy-card-item">Fast Delivery Liên Tục Cập Nhật Tuyến Ảnh Hưởng Do Dịch</div>
                <div className="policy-card-item">Giao/Nhận Hàng Tại TP.HCM Chính Thức Trở Lại Bình Thường</div>
                <div className="policy-card-item">Dịch Vụ Giao Hàng Thương Mại Điện Tử</div>
                <div className="policy-card-item">Dịch Vụ Kho Và Xử Lý Đơn Hàng</div>
            </div>
            <Grid col={2} mdCol={2} smCol={1} gap={20}>
                <div className="province-img">
                    <img src={post} />
                </div>
                <div className="province-info">
                    <div className="province-info-form">
                        <input type="text" placeholder='Chọn tỉnh thành'/>
                        <Button size='sm'>tra cứu điểm gửi hàng</Button>
                    </div>
                    <div className="province-info-txt">
                        <h1>210++</h1>
                        <p>Điểm gửi hàng trên toàn quốc</p>
                    </div>
                </div>
            </Grid>
            <div className="banner">
                <img style={{width: "100%"}} src={banner} alt="" />
            </div>
            <div className="action">
                <div className="action-item"></div>
                <div className="action-item"></div>
                <div className="action-item"></div>
                <div className="action-item"></div>
            </div>
        </div>
    )
}

export default Home