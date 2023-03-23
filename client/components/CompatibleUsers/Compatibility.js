import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const UserCompatibility = () => {
  const { id } = useParams();
  const { auth } = useSelector((state) => state);

  const [userPref, setUserPref] = useState({});
  const [matchInfos, setMatchInfos] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUserPref = async (id) => {
      try {
        const response = await axios.get(`/api/users/${id}/userPreference`);
        const result = await response.data;
        setUserPref(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserPref(auth.id);

    const fetchMatchInfos = async () => {
      try {
        const response = await axios.get(`/api/compatibility/userinfos`);
        const result = await response.data;
        setMatchInfos(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMatchInfos();
  }, []);
  console.log("these are auths prefs", userPref);
  console.log("these are all infos", matchInfos);

  let count = 0;
  let matchesArr = [];

  const matches = matchInfos.map((userInfo) => {
    if (userInfo.cleanliness === userPref[0].cleanliness) {
      count++;
    }
    if (userInfo.drugs === userPref[0].drugs) {
      count++;
    }
    if (
      userInfo.age >= userPref[0].minAge &&
      userInfo.age <= userPref[0].maxAge
    ) {
      count++;
    }
    if (userInfo.hasPets === userPref[0].allowPets) {
      count++;
    }
    if (
      userInfo.gender === userPref[0].gender ||
      userPref[0].gender === "No Preference"
    ) {
      count++;
    }
    if (userInfo.noiseLevel === userPref[0].noiseLevel) {
      count++;
    }
    if (userInfo.overnightGuests === userPref[0].overnightGuests) {
      count++;
    }
    if (
      userInfo.politicalViews === userPref[0].politicalViews ||
      userPref[0].politicalViews === "No Preference"
    ) {
      count++;
    }
    if (
      userInfo.religion === userPref[0].religion ||
      userPref[0].religion === "No Preference"
    ) {
      count++;
    }
    if (
      userInfo.sexualOrientation === userPref[0].sexualOrientation ||
      userPref[0].sexualOrientation === "No Preference"
    ) {
      count++;
    }
    if (userInfo.smoking === userPref[0].smoking) {
      count++;
    }
    if (userInfo.socialLevel === userPref[0].socialLevel) {
      count++;
    }
    if (
      userInfo.workSchedule === userPref[0].workSchedule ||
      userPref[0].workSchedule === "No Preference"
    ) {
      count++;
    }
    console.log("this is count", count);
    if (count >= 7 && userInfo.userId !== userPref[0].userId) {
      matchesArr.push(userInfo);
    }
    count = 0;
    console.log("this is matches Arr", matchesArr);
  });

  return userPref.length > 0 ? (
    <div>
      <h2>
        Hi {auth.fullName}!<br></br>
        <br></br>
      </h2>
      <h2>Here are you matches!</h2>
      <h1></h1>
    </div>
  ) : (
    <h4>Sorry, there are no matches in your area!</h4>
  );
};

export default UserCompatibility;
