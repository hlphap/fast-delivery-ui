import { Routes, Route } from "react-router-dom";
import { HeaderGuest, Footer } from "../../components";

import { Home, Login, Tracking } from "../../pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </>
  );
};

export default Router;
