import React from "react";
import Navbar from "../../common/Navbar/Navbar";

export default function Friends({ userDetail }) {
  return (
    <>
      <Navbar userDetail={userDetail} />
      <h1 style={{ color: "white" }}>Chưa có bạn bè</h1>
    </>
  );
}
