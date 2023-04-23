import React, { useState } from "react";
import s from "./TweetCard.module.css";
import { useUpdateUserMutation } from "../../redux/userApi";
import { Button } from "../button/Button";
import { FOLLOW, FOLLOWING } from "./TweetCard.constants";

export default function TweetCard({ id, user, avatar, tweets, followers }) {
  const [isFollow, setIsFollow] = useState(false);
  const [followCount, setFollowCount] = useState(followers);
  const [updateField] = useUpdateUserMutation();

  const onFollowBtnClick = () => {
    setIsFollow(!isFollow);
    const update = isFollow
      ? setFollowCount((prevFollowers) => prevFollowers - 1)
      : setFollowCount((prevFollowers) => prevFollowers + 1);
    updateField({ id: id, followers: update });
  };

  return (
    <li id={id} className={s.li}>
      <div className={s.box}>
        <img src={avatar} alt={user} className={s.img}></img>
      </div>
      <div className={s.tweets}>{tweets} tweets</div>
      <div className={s.followers}> {followCount} followers </div>
      <Button
        isFollow={isFollow}
        text={isFollow ? FOLLOWING : FOLLOW}
        onClick={onFollowBtnClick}
      ></Button>
    </li>
  );
}
