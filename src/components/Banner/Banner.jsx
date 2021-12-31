import clsx from "clsx";
import Styles from "./Banner.module.scss";

function BannerSignUp() {
  return (
    <div className={Styles.Banner}>
      <div className="container">
        <p className={Styles.BannerSologan}>
          Đăng ký thành viên FastDelivery - Tích điểm thưởng và nhận ưu đãi
        </p>
        <span>
          Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền
          lợi.
        </span>
      </div>
    </div>
  );
}

export default BannerSignUp;
