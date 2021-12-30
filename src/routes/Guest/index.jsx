import { Routes, Route } from "react-router-dom";
import { HeaderGuest, Footer } from "../../components";

import { Home, Login } from "../../pages";

const Router = () => {
  return (
    <>
      <HeaderGuest />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Home />} />
      </Routes>
      <hr style={{ marginTop: " 20px" }} />
      <Footer />
    </>
  );
};

export default Router;
