import { Link } from "react-router-dom";

import Grid from "../Grid";
import Button from "../Button/Button";

import "./Footer.scss";
import logo from "../../assets/img/Pháp Heo.png";

const footerAboutLinks = [
  {
    display: "Trang chủ",
    path: "/about",
  },
  {
    display: "Dịch vụ",
    path: "/about",
  },
  {
    display: "Tuyển dụng",
    path: "/about",
  },
  {
    display: "Về chúng tôi",
    path: "/about",
  },
];

const Footer = () => {
  return (
    <>
      <hr style={{ marginTop: " 20px" }} />

      <footer className="footer">
        <div className="container">
          <Grid col={4} mdCol={2} smCol={1} gap={10}>
            <div className="footer__about">
              <p>
                <Link to="/">
                  <img src={logo} className="footer__logo" alt="" />
                </Link>
              </p>
              <p>
                Công ty giao nhận đầu tiên tại Việt Nam được thành lập với sứ
                mệnh phục vụ nhu cầu vận chuyển chuyên nghiệp của các đối tác
                Thương mại điện tử trên toàn quốc.
              </p>
            </div>
            <div>
              <div className="footer__title">Contact Info</div>
              <div className="footer__content">
                <p>+0123-456-789</p>
                <p>+0123-456-789</p>
                <p>HoiCL@gmail.com</p>
                <p>Phường 5, Quận 1, Hồ Chí Minh</p>
              </div>
            </div>

            <div>
              <div className="footer__title">Quick Links</div>
              <div className="footer__content">
                {footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="footer__title">Newsletter</div>
              <div className="footer__content">
                <p>Subscribe For Latest Updates</p>
                <input type="text" placeholder="Your email" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </Grid>
        </div>
      </footer>
    </>
  );
};

export default Footer;
