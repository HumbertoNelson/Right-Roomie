import { useSelector } from "react-redux";
const { auth } = useSelector((state) => state);

const preferencesObj = {
  cleanliness: 0,
  allowPets: "",
  smoking: "",
  minAge: 0,
  maxAge: 0,
  drugs: "",
  gender: "",
  workSchedule: "",
  socialLevel: 0,
  noiseLevel: 0,
  overnightGuests: "",
  sexualOrientation: "",
  politicalView: "",
  religion: "",
  userId: auth.id,
};

module.exports = preferencesObj;
