import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import localStorage from "local-storage";

import styles from "./Login.module.scss";

import { Modal, IconInput, Button, LoRe, Banner } from "../../components";

import { Gmail, Password } from "../../assets/data/Icons";

const Login = () => {
  const [data, setData] = useState();

  const handleOnChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  const handleLogin = (e) => {
    toast.promise(
      axios
        .post(process.env.REACT_APP_API_URL + "/stores/login", data)
        .then((res) => {
          localStorage.set("token", res.data.token);
          localStorage.set("store", res.data.store);
          localStorage.set("storeID", res.data.store._id);
          setTimeout(() => {
            window.location.href = "/store";
          }, 1000);
        }),
      {
        pending: "Đang thực hiện",
        success: "Đăng nhập thành công",
        error: "Đăng nhập thất bại",
      }
    );
  };

  return (
    <>
      <div className="login">
        <Banner />
        <div className="container">
          <LoRe />
          <Modal
            styleClass={{
              left: "70%",
              top: "30%",
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
                  typeInput="text"
                  textInput="Email"
                  iconComponent={<Gmail />}
                  name="email"
                  onChange={(e) => handleOnChange(e)}
                />
                <IconInput
                  typeInput="password"
                  textInput="Password"
                  iconComponent={<Password />}
                  name="password"
                  onChange={(e) => handleOnChange(e)}
                />

                <div className={styles.button}>
                  <Button size="sm" onClick={handleLogin}>
                    Đăng nhập
                  </Button>
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
    </>
  );
};

export default Login;
