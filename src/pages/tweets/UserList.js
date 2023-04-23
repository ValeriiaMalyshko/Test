import React, { useState } from "react";
import { Link } from "react-router-dom";
import TweetCard from "../../components/tweetCard/TweetCard";
import s from "./UserList.module.css";
import { useFetchUsersQuery } from "../../redux/userApi";

const UsersList = () => {
  const { data, isLoading } = useFetchUsersQuery();
  console.log(data);

  const userPerRow = 12;
  const [next, setNext] = useState(userPerRow);
  const handleMoreImage = () => {
    setNext(next + userPerRow);
  };

  return (
    <>
      <div className={s.link}>
        <Link to="/">Back</Link>
      </div>
      {data?.length === 0 ? (
        <h2>Data is empty</h2>
      ) : isLoading ? (
        <h2>Data is loading</h2>
      ) : (
        <ul className={s.ul}>
          {data?.slice(0, next)?.map((user) => {
            return (
              <TweetCard
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
