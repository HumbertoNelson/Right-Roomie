import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const UserCompatibility = () => {
  const { id } = useParams();
  const { auth } = useSelector((state) => state);

  const [userPref, setUserPref] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [matchInfos, setMatchInfos] = useState([]);
  const [matchPrefs, setMatchPrefs] = useState([]);
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

    const fetchUserInfo = async (id) => {
      try {
        const response = await axios.get(`api/users/userinfo/${id}`);
        const result = await response.data;
        setUserInfo(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo(auth.id);

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

  let count = 0;
  let matchesArrOne = [];

  matchInfos.map((userInfo) => {
    if (userInfo.user.city !== userPref[0].user.city) return;
    if (userInfo.cleanliness === userPref[0].cleanliness) count++;
    if (userInfo.drugs === userPref[0].drugs) count++;
    if (
      userInfo.age >= userPref[0].minAge &&
      userInfo.age <= userPref[0].maxAge
    )
      count++;
    if (userInfo.hasPets === userPref[0].allowPets) count++;
    if (
      userInfo.gender === userPref[0].gender ||
      userPref[0].gender === "No Preference"
    )
      count++;
    if (userInfo.noiseLevel === userPref[0].noiseLevel) count++;

    if (userInfo.overnightGuests === userPref[0].overnightGuests) count++;
    if (
      userInfo.politicalViews === userPref[0].politicalViews ||
      userPref[0].politicalViews === "No Preference"
    )
      count++;
    if (
      userInfo.religion === userPref[0].religion ||
      userPref[0].religion === "No Preference"
    )
      count++;
    if (
      userInfo.sexualOrientation === userPref[0].sexualOrientation ||
      userPref[0].sexualOrientation === "No Preference"
    )
      count++;
    if (userInfo.smoking === userPref[0].smoking) count++;
    if (userInfo.socialLevel === userPref[0].socialLevel) count++;
    if (
      userInfo.workSchedule === userPref[0].workSchedule ||
      userPref[0].workSchedule === "No Preference"
    )
      count++;
    console.log("this is count", count);
    if (count >= 10 && userInfo.userId !== userPref[0].userId) {
      matchesArrOne.push(userInfo);
    }
    count = 0;
  });

  const matchesFunc = async (matchesArrOne) => {
    console.log("match arr 1", matchesArrOne);
    matchesArrOne.map(async (user) => {
      try {
        const response = await axios.get(
          `/api/users/${user.userId}/userPreference`
        );
        const result = await response.data;
        return setMatchPrefs(result);
      } catch (error) {
        console.error(error);
      }
    });
  };
  useEffect(() => {
    matchesFunc(matchesArrOne);
  }, [matchInfos]);

  let finalMatches = [];

  matchPrefs.map((user) => {
    if (user.cleanliness === userInfo[0].cleanliness) count++;
    if (user.drugs === userInfo[0].drugs) count++;
    if (userInfo[0].age >= user.minAge && userInfo[0] <= user.maxAge) count++;
    if (userInfo[0].hasPets === user.allowPets) count++;
    if (userInfo[0].gender === user.gender || user.gender === "No Preference")
      count++;
    if (userInfo[0].noiseLevel === user.noiseLevel) count++;

    if (userInfo[0].overnightGuests === user.overnightGuests) count++;
    if (
      userInfo[0].politicalViews === user.politicalViews ||
      user.politicalViews === "No Preference"
    )
      count++;
    if (
      user.religion === userInfo[0].religion ||
      user.religion === "No Preference"
    )
      count++;
    if (
      user.sexualOrientation === userInfo[0].sexualOrientation ||
      user.sexualOrientation === "No Preference"
    )
      count++;
    if (user.smoking === userInfo[0].smoking) count++;
    if (user.socialLevel === userInfo[0].socialLevel) count++;
    if (
      user.workSchedule === userInfo[0].workSchedule ||
      user.workSchedule === "No Preference"
    )
      count++;
    console.log("this is count", count);
    if (count >= 8) {
      finalMatches.push(user);
      console.log("final matches", finalMatches);
    }
    count = 0;
  });

  console.log("this is matchPrefs", matchPrefs);
  console.log("this is userinfo", userInfo);

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
