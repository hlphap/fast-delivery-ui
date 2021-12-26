import React from 'react'

import Coins from '../assets/img/coins@2x 1.png'
import Wallet from '../assets/img/wallet@2x 1.png'
import Backpack from '../assets/img/backpack@2x 1.png'
import Sale from '../assets/img/top-sales@2x 1.png'

import Grid from './Grid'

const LoRe = () => {
    return (
        <div>
            <div className='info'>
                    <Grid col={2} mdCol={2} smCol={1} gap={80}>
                        <div className="info__card">
                            <img src={Coins} alt="" />
                            <h3>Tích điểm nhanh chóng</h3>
                            <p>Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi thành Fast Credit để tiết kiệm nhiều hơn nữa.</p>
                        </div>
                        <div className="info__card">
                            <img src={Wallet} alt="" />
                            <h3>Thanh toán đơn giản</h3>
                            <p>Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng lưu thẻ để đặt phòng lần sau.</p>
                        </div>
                    </Grid>
                    <Grid col={2} mdCol={2} smCol={1} gap={80}>
                        <div className="info__card">
                            <img src={Backpack} alt="" />
                            <h3>Ưu đãi mỗi ngày</h3>
                            <p>Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch để lựa chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện nghi với giá tốt nhất.</p>
                        </div>
                        <div className="info__card">
                            <img src={Sale} alt="" />
                            <h3>Tiện ích thông minh</h3>
                            <p>Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.</p>
                        </div>
                    </Grid>
                </div>
        </div>
    )
}

export default LoRe
