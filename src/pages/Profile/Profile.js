import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/Navbar/Navbar";
import Article from "../../containers/Article/Article";
import ProfileHeader from "../../containers/ProfileHeader/ProfileHeader";
import { articleService } from "../../services/ArticleService";
import { userService } from "../../services/UserService";

export default function Profile({ userDetail }) {
  const [userArticle, setUserArticle] = useState([]);
  const [userDetails, setuserDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    userService
      .getUserDetail(params.username)
      .then((res) => setuserDetails(res.data.user))
      .catch((err) => alert(err));
    articleService
      .getUserArticle(params.username)
      .then((res) => setUserArticle(res.data.posts))
      .catch((err) => alert(err));
  }, [params.username]);
  return (
    <>
      <Navbar userDetail={userDetail} />
      <ProfileHeader userDetail={userDetails} />
      <Article userArticle={userArticle} user={userDetails} />
    </>
  );
}
