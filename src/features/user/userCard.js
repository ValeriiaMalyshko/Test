import React, { useState } from "react";
// import PropTypes from "prop-types";
import s from "./userCard.module.css";

export default function User({ id, user, avatar, tweets, followers }) {
  const [clicked, setClicked] = useState("");
  const [follow, setFollow] = useState(followers);

  const handleClick = () => {
    clicked ? setClicked("") : setClicked(s.active);
    clicked ? setFollow(followers) : setFollow(followers + 1);
  };
  return (
    <li id={id} className={s.li}>
      <div className={s.line}>
        <img src={avatar} alt={user} className={s.img}></img>
      </div>
      <div className={s.tweets}>{tweets} tweets</div>
      <div className={s.followers}> {follow} followers </div>
      <button className={clicked || s.btn} type="button" onClick={handleClick}>
        {clicked ? "Following" : "Follow"}
      </button>
    </li>
  );
}

// User.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   tweets: PropTypes.number.isRequired,
//   followers: PropTypes.number.isRequired,
// };
