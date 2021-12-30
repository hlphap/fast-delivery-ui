import { Routes, Route } from "react-router-dom";

import RouterGuest from "./routes/Guest";
import RouterStore from "./routes/Store";
import "./common/_base.scss";

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/store/*" element={<RouterStore />} />
        <Route path="*" element={<RouterGuest />} />
      </Routes>
    </div>
  );
};

export default App;
