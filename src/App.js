import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { user } from "./config/config";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Page404 from "./pages/Error/Page404";
import Friends from "./pages/Friends/Friends";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { userService } from "./services/UserService";
function App() {
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    if (user) {
      userService
        .getUserDetail(user.user_id)
        .then((res) => {
          setUserDetail(res.data.user);
        })
        .catch((err) => console.log(err));
    } else setUserDetail({});
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home userDetail={userDetail} />} />
        <Route path="/friends" element={<Friends userDetail={userDetail} />} />
        <Route
          path="/profile/:username"
          element={<Profile userDetail={userDetail} />}
        />
        <Route path="/oops" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
