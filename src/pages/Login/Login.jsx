import React from "react";
import styles from "./Login.module.scss";

import { Modal, IconInput, Button, LoRe, Banner } from "../../components";

import { Facebook, Google, Gmail, Password } from "../../assets/data/Icons";

const Login = () => {
  return (
    <div className="login">
      <Banner />
      <div className="container">
        <LoRe />
        <Modal
          styleClass={{
            left: "70%",
            top: "20%",
          }}
        >
          <div className={styles.LoginModal}>
            <div className={styles.Account}>
              <h2 className={styles.HeadingTitle}>Đăng nhập</h2>
              <div className={styles.DescriptionBlock}>
                <h4 className={styles.Description}>
                  Đăng nhập FranceStay để trải nghiệm
                </h4>
              </div>
              <IconInput
                errorText={"*Chưa nhập địa chỉ Email"}
                textInput="email"
                iconComponent={<Gmail />}
              />
              <IconInput
                typeInput="password"
                textInput="password"
                iconComponent={<Password />}
              />

              <div className={styles.button}>
                <Button size="sm">Đăng nhập</Button>
              </div>

              <div className={styles.EventTextBlock}>
                <p className={styles.EventText}>
                  Quên mật khẩu ?{" "}
                  <a href="/forgot" className={styles.ActionEventLink}>
                    Nhấn vào đây
                  </a>
                </p>
              </div>
              <div className={styles.EventTextBlock}>
                <p className={styles.EventText}>
                  Bạn chưa có tài khoản FranceStay?{" "}
                  <a href="register" className={styles.ActionEventLink}>
                    Đăng ký
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
