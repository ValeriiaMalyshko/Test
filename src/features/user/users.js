import React, { useState } from "react";
// import PropTypes from 'prop-types';
import User from "./userCard";
import s from "./userCard.module.css";
import { useFetchUsersQuery } from "../../app/userSlice";
// import { useSelector } from "react-redux";

const UsersList = () => {
  const { data } = useFetchUsersQuery();
  console.log(data);

  const userPerRow = 12;
  const [next, setNext] = useState(userPerRow);
  const handleMoreImage = () => {
    setNext(next + userPerRow);
  };

  return (
    <>
      {data === undefined ? (
        <div>Data is empty</div>
      ) : (
        <ul className={s.ul}>
          {data?.slice(0, next)?.map((user) => {
            return (
              <User
                key={user.id}
                id={user.id}
                user={user.user}
                avatar={user.avatar}
                tweets={user.tweets}
                followers={user.followers}
              />
            );
          })}
        </ul>
      )}
      {next < data?.length && (
        <button className={s.load} type="button" onClick={handleMoreImage}>
          Load more
        </button>
      )}
    </>
  );
};

export default UsersList;
