import React from "react";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <h3>{user.fullName}</h3>
    </div>
  );
};

export default UserCard;
