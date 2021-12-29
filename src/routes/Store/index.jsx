import { Routes, Route } from "react-router-dom";
import { HeaderStore } from "../../components";

import {
  OrderManagement,
  PostOrder,
  MoneyManagement,
  CommissionStore,
  Me,
} from "../../pages";

const Router = () => {
  return (
    <>
      <HeaderStore />
      <Routes>
        <Route path="/" element={<OrderManagement />} />
        <Route path="/post" element={<PostOrder />} />
        <Route path="/money-management" element={<MoneyManagement />} />
        <Route path="/commission" element={<CommissionStore />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </>
  );
};

export default Router;
