import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import {
  fetchMatchInfos,
  fetchUserInfo,
  addToMatchPrefs,
  fetchMatchPrefs,
} from "../../store";
import { getUserPref } from "../../store/userPreference";

const UserCompatibility = () => {
  const { id } = useParams();
  const { auth, userPref, userInfo, matchInfo, matchPrefs } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPref(auth.id));
    dispatch(fetchUserInfo(auth.id));
    dispatch(fetchMatchInfos());
    dispatch(fetchMatchPrefs());
  }, []);

  console.log("this is user preference from store", userPref);
  console.log("this is user info from store", userInfo);
  console.log("this is match info from store", matchInfo);
  console.log("this is match Prefs from store", matchPrefs);

  //   const [userPref, setUserPref] = useState({});
  //   const [userInfo, setUserInfo] = useState({});
  //   const [matchInfos, setMatchInfos] = useState([]);
  //   const [matchPrefs, setMatchPrefs] = useState([]);
  //   const [filteredUsers, setFilteredUsers] = useState([]);

  //   useEffect(() => {
  //     const fetchUserPref = async (id) => {
  //       try {
  //         const response = await axios.get(`/api/users/${id}/userPreference`);
  //         const result = await response.data;
  //         setUserPref(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchUserPref(auth.id);

  //     const fetchUserInfo = async (id) => {
  //       try {
  //         const response = await axios.get(`api/users/userinfo/${id}`);
  //         const result = await response.data;
  //         setUserInfo(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchUserInfo(auth.id);

  //     const fetchMatchInfos = async () => {
  //       try {
  //         const response = await axios.get(`/api/compatibility/userinfos`);
  //         const result = await response.data;
  //         setMatchInfos(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchMatchInfos();
  //   }, []);

  let countOne = 0;
  let matchesArrOne = [];
  let finalMatches = [];
  let countTwo = 0;

  matchInfo.map((userInfo) => {
    if (userInfo.user.city !== userPref[0].user.city) return;
    if (userInfo.cleanliness === userPref[0].cleanliness) countOne++;
    if (userInfo.drugs === userPref[0].drugs) countOne++;
    if (
      userInfo.age >= userPref[0].minAge &&
      userInfo.age <= userPref[0].maxAge
    )
      countOne++;
    if (userInfo.hasPets === userPref[0].allowPets) countOne++;
    if (
      userInfo.gender === userPref[0].gender ||
      userPref[0].gender === "No Preference"
    )
      countOne++;
    if (userInfo.noiseLevel === userPref[0].noiseLevel) countOne++;

    if (userInfo.overnightGuests === userPref[0].overnightGuests) countOne++;
    if (
      userInfo.politicalViews === userPref[0].politicalViews ||
      userPref[0].politicalViews === "No Preference"
    )
      countOne++;
    if (
      userInfo.religion === userPref[0].religion ||
      userPref[0].religion === "No Preference"
    )
      countOne++;
    if (
      userInfo.sexualOrientation === userPref[0].sexualOrientation ||
      userPref[0].sexualOrientation === "No Preference"
    )
      countOne++;
    if (userInfo.smoking === userPref[0].smoking) countOne++;
    if (userInfo.socialLevel === userPref[0].socialLevel) countOne++;
    if (
      userInfo.workSchedule === userPref[0].workSchedule ||
      userPref[0].workSchedule === "No Preference"
    )
      countOne++;

    if (countOne >= 7 && userInfo.userId !== userPref[0].userId) {
      matchesArrOne.push(userInfo);
      console.log("this is first countOne", countOne);
    }
    countOne = 0;
    return matchesArrOne;
  });
  console.log("this is arr one", matchesArrOne.values);

  const result = matchPrefs.map((pref) => {
    Object.values(matchesArrOne).filter((user) => user.userId === pref.userId);
  });

  console.log("this is result", result);

  //   console.log("this is arr 2", finalMatches);

  //   const matchesFunc = async (matchesArrOne) => {
  //     matchesArrOne.map(async (user) => {
  //       try {
  //         const response = await axios.get(
  //           `/api/users/${user.userId}/userPreference`
  //         );

  //         const result = await response.data;
  //         console.log("this is result", result);
  //         //   setMatchPrefs(...matchPrefs, result);
  //         finalMatches.push(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     });
  //   };
  //   useEffect(() => {
  //     matchesFunc(matchesArrOne);
  //   }, [matchInfos]);

  //   console.log("this is match prefs before map", matchPrefs);

  //   matchPrefs.map((user) => {
  //     if (user.cleanliness === userInfo[0].cleanliness) countTwo++;
  //     if (user.drugs === userInfo[0].drugs) countTwo++;
  //     if (userInfo[0].age >= user.minAge && userInfo[0] <= user.maxAge)
  //       countTwo++;
  //     if (userInfo[0].hasPets === user.allowPets) countTwo++;
  //     if (userInfo[0].gender === user.gender || user.gender === "No Preference")
  //       countTwo++;
  //     if (userInfo[0].noiseLevel === user.noiseLevel) countTwo++;

  //     if (userInfo[0].overnightGuests === user.overnightGuests) countTwo++;
  //     if (
  //       userInfo[0].politicalViews === user.politicalViews ||
  //       user.politicalViews === "No Preference"
  //     )
  //       countTwo++;
  //     if (
  //       user.religion === userInfo[0].religion ||
  //       user.religion === "No Preference"
  //     )
  //       countTwo++;
  //     if (
  //       user.sexualOrientation === userInfo[0].sexualOrientation ||
  //       user.sexualOrientation === "No Preference"
  //     )
  //       countTwo++;
  //     if (user.smoking === userInfo[0].smoking) countTwo++;
  //     if (user.socialLevel === userInfo[0].socialLevel) countTwo++;
  //     if (
  //       user.workSchedule === userInfo[0].workSchedule ||
  //       user.workSchedule === "No Preference"
  //     )
  //       countTwo++;
  //     if (countTwo >= 5) {
  //       finalMatches.push(user);
  //       console.log("this is countTwo", countTwo);
  //       countTwo = 0;
  //     }
  //     return finalMatches;
  //   });

  console.log("final matches", finalMatches);

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
