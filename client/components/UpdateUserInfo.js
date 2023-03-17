import React from "react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo, fetchUserInfo } from "../store";
import { useParams } from "react-router-dom";

const UpdateUserInfo = (props) => {
  const { auth, userInfo } = useSelector((state) => state);
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  console.log("this is values", values);
  useEffect(() => {
    // dispatch(fetchUserInfo(auth.id));
    const fetchUserInfo = async (id) => {
      try {
        const response = await axios.get(`/api/users/userinfo/${id}`);
        const result = await response.data;
        setValues(result[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo(auth.id);
  }, []);

  console.log("this is userinfo", userInfo);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log("handle change", { [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("these are values", values);
    dispatch(updateUserInfo(values, auth.id));
  };

  return (
    <div>
      <h1>Update Your Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cleanliness">How clean are you?</label>
        <select
          name="cleanliness"
          onChange={handleChange}
          value={values.cleanliness}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label htmlFor="pets">Do you have pets?</label>
        <input
          onChange={handleChange}
          type="radio"
          name="hasPets"
          value={"Yes"}
          checked={values.hasPets === "Yes"}
        />
        Yes
        <input
          onChange={handleChange}
          type="radio"
          name="hasPets"
          value={"No"}
          checked={values.hasPets === "No"}
        />
        No
        <label htmlFor="smoking">Do you smoke?</label>
        <input
          onChange={handleChange}
          type="radio"
          name="smoking"
          value={"Yes"}
          checked={values.smoking === "yes"}
        />
        Yes
        <input
          onChange={handleChange}
          type="radio"
          name="smoking"
          value={"No"}
          checked={values.smoking === "No"}
        />
        No
        <label htmlFor="age">How old are you?</label>
        <input
          onChange={handleChange}
          type="text"
          name="age"
          value={values.age}
        />
        <label htmlFor="smoking">Do you participate in drug use?</label>
        <input
          onChange={handleChange}
          type="radio"
          name="drugs"
          value={"Yes"}
          checked={values.drugs === "Yes"}
        />
        Yes
        <input
          onChange={handleChange}
          type="radio"
          name="drugs"
          value={"No"}
          checked={values.drugs === "No"}
        />
        No
        <label htmlFor="gender">What gender do you identify with?</label>
        <select onChange={handleChange} name="gender" value={values.gender}>
          <option value={""}> </option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
          <option value={"Nonbinary"}>Nonbinary</option>
          <option value={"Transgender"}>Transgender</option>
          <option value={"Prefer not to respond"}>Prefer not to respond</option>
        </select>
        <label htmlFor="Sexual Orientation">
          Which sexual orientation do you identify with?
        </label>
        <select
          onChange={handleChange}
          name="sexualOrientation"
          value={values.sexualOrientation}
        >
          <option value={""}></option>
          <option value={"Straight"}>Straight</option>
          <option value={"LGBTQIA+"}>LGBTQIA+</option>
          <option value={"Prefer not to respond"}>Prefer not to respond</option>
        </select>
        <label htmlFor="work schedule">What is your work schedule like?</label>
        <select
          onChange={handleChange}
          name="workSchedule"
          value={values.workSchedule}
        >
          <option value={""}></option>
          <option value={"Week Days"}>Week Days</option>
          <option value={"Nights"}>Nights</option>
          <option value={"Weekends"}>Weekends</option>
        </select>
        <label htmlFor="social level">How social are you?</label>
        <select
          onChange={handleChange}
          name="socialLevel"
          value={values.socialLevel}
        >
          <option value={""}></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label htmlFor="noise level">
          Do you listen to loud music or enjoy activities that are noisey?
        </label>
        <select
          onChange={handleChange}
          name="noiseLevel"
          value={values.noiseLevel}
        >
          <option value={""}></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label htmlFor="overnight guests">
          Are you going to have other people sleep over?
        </label>
        <input
          onChange={handleChange}
          type="radio"
          name="overnightGuests"
          value={"Yes"}
          checked={values.overnightGuests === "Yes"}
        />
        Yes
        <input
          onChange={handleChange}
          type="radio"
          name="overnightGuests"
          value={"No"}
          checked={values.overnightGuests === "No"}
        />
        No
        <input
          onChange={handleChange}
          type="radio"
          name="overnightGuests"
          value={"Sometimes"}
        />
        Sometimes
        <label htmlFor="Political Views">
          How would you identify politically?
        </label>
        <select
          onChange={handleChange}
          name="politicalViews"
          value={values.politicalViews}
        >
          <option value={""}></option>
          <option value={"Democrat"}>Democrat</option>
          <option value={"Republican"}>Republican</option>
          <option value={"Neither"}>Neither</option>
        </select>
        <label htmlFor="Religious Views">
          How would you identify religiously?
        </label>
        <select onChange={handleChange} name="religion" value={values.religion}>
          <option value={""}></option>
          <option value={"Christian"}>Christian</option>
          <option value={"Jewish"}>Jewish</option>
          <option value={"Muslim"}>Muslim</option>
          <option value={"Buddhist"}>Buddhist</option>
          <option value={"Hindu"}>Hindu</option>
          <option value={"Atheist"}>Atheist</option>
          <option value={"Non-Religious"}>Non-Religious</option>
          <option value={"Something Not Listed Above"}>
            Something Not Listed Above
          </option>
          <option value={"Prefer not to respond"}>Prefer not to respond</option>
        </select>
        <button type="submit">Save Info</button>
      </form>
    </div>
  );
};

export default UpdateUserInfo;
