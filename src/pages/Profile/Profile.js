import React from "react";
import Navbar from "../../common/Navbar/Navbar";
import Article from "../../containers/Article/Article";
import ProfileHeader from "../../containers/ProfileHeader/ProfileHeader";

export default function Profile() {
  return (
    <>
      <Navbar />
      <ProfileHeader />
      <Article />
    </>
  );
}
