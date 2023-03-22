import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const AllUsers = () => {
  const usersArr = [
    {
      id: 1,
      username: "cody",
      password: "$2b$05$58X/kMrWaSu88AiHglF0UOSLP3jh1CvaJmx0sV.U5DWTBibrqHvSa",
      fullName: "Cody Miller",
      city: "Brooklyn",
      email: "cody@email.com",
      phone_number: "5556667777",
      imgUrl: null,
    },
    {
      id: 2,
      username: "mark",
      password: "$2b$05$/gd5Z0K0au3owqksM7bn2Om56f6TfkvLsSK2.QfMBHSoOCFZ4YOMW",
      fullName: "Mark Johnson",
      city: "Brooklyn",
      email: "murphy@email.com",
      phone_number: "1112223333",
      imgUrl: null,
    },
  ];
  return (
    <div>
      <ul>
        {usersArr.map((user) => {
          return (
            <div key={user.id}>
              <UserCard user={user} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AllUsers;
