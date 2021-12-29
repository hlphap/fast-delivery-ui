import Styles from "./Banner.module.scss";

function BannerSignUp() {
  return (
    <div className={Styles.Banner}>
      <p className={Styles.BannerSologan}>
        Đăng ký thành viên FranceStay - Tích điểm thưởng và nhận ưu đãi
      </p>
      <span>
        Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền lợi.
      </span>
    </div>
  );
}

export default BannerSignUp;
