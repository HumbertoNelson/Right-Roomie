import React from "react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUserPreferences } from "../store/userPreference";

const UpdateUserPreferences = (props) => {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("cleanlinessRange");
  const { auth } = useSelector((state) => state);
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  console.log("this is values", values);
  useEffect(() => {
    const fetchUserPref = async (id) => {
      try {
        const response = await axios.get(`/api/users/${id}/userPreference`);
        const result = await response.data;
        setValues(result[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserPref(auth.id);
  }, []);

  const onChange = (ev) => {
    let onChange = {
      setValues: setValues({
        ...values,
        [ev.target.name]: ev.target.value,
      }),
      slider: (slider = function (ev) {
        output.innerHTML = ev.value;
      }),
    };
  };

  const getPreference = async (event) => {
    event.preventDefault();
    console.log("these are values", values);
    dispatch(updateUserPreferences(values, auth.id));
  };

  return (
    <div>
      <h1>Update Your Preferences About Your Roommate</h1>
      <form onSubmit={getPreference}>
        <div className="slidecontainer">
          <h3 id="cleanlinessRange">
            Cleanliness level you expect: {values.cleanliness}
          </h3>
          <input
            name="cleanliness"
            type="range"
            min="0"
            max="5"
            value={values.cleanliness}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label htmlFor="allowPets">
            <h3>Roommate with pets?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="allowPets"
            value={"Yes"}
            checked={values.allowPets === "Yes"}
          />
          Yes
          <input
            onChange={onChange}
            type="radio"
            name="allowPets"
            value={"No"}
            checked={values.allowPets === "No"}
          />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="smoking">
            <h3>Is it ok if your roomate smokes?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="smoking"
            value={"Yes"}
            checked={values.smoking === "Yes"}
          />
          Yes
          <input
            onChange={onChange}
            type="radio"
            name="smoking"
            value={"No"}
            checked={values.smoking === "No"}
          />
          No
        </div>
        <br></br>
        <div className="slidecontainer">
          <h3 id="minAge">Minimum Age: {values.minAge}</h3>
          <input
            name="minAge"
            type="range"
            min="18"
            max="100"
            value={values.minAge}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <div className="slidecontainer">
          <h3 id="maxAge">Maximum Age: {values.maxAge}</h3>
          <input
            name="maxAge"
            type="range"
            min=""
            max="100"
            value={values.maxAge}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label htmlFor="drugs">
            <h3>Is recreational drug use okay?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="drugs"
            value={"Yes"}
            checked={values.drugs === "Yes"}
          />
          Yes
          <input
            onChange={onChange}
            type="radio"
            name="drugs"
            value={"No"}
            checked={values.drugs === "No"}
          />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="gender">
            <h3>Roommate Gender</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={"Male"}
            checked={values.gender === "Male"}
          />
          Male
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={"cisFemale"}
            checked={values.gender === "Female"}
          />
          Female
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={"Transgender"}
            checked={values.gender === "Transgender"}
          />
          Transgender
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={"Non-binary"}
            checked={values.gender === "Non-binary"}
          />
          Non-binary
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={"No Preference"}
            checked={values.gender === "No Preference"}
          />
          No Preference
        </div>
        <br></br>
        <div>
          <label htmlFor="workSchedule">
            <h3>What's your prefered work schedule in a roomate?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="workSchedule"
            value={"Weekdays"}
            checked={values.workSchedule === "Weekdays"}
          />
          Weekdays
          <input
            onChange={onChange}
            type="radio"
            name="workSchedule"
            value={"Weekends"}
            checked={values.workSchedule === "Weekends"}
          />
          Weekends
          <input
            onChange={onChange}
            type="radio"
            name="workSchedule"
            value={"Nights"}
            checked={values.workSchedule === "Nights"}
          />
          Nights
          <input
            onChange={onChange}
            type="radio"
            name="workSchedule"
            value={"No Preference"}
            checked={values.workSchedule === "No Preference"}
          />
          No Preference
        </div>
        <br></br>
        <div className="slidecontainer">
          <h3 id="socialLevel">
            Social level you're comfortable with: {values.socialLevel}
          </h3>
          <input
            name="socialLevel"
            type="range"
            min="0"
            max="5"
            value={values.socialLevel}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div className="slidecontainer">
          <h3 id="noiseLevel">
            Noise level you're comfortable with: {values.noiseLevel}
          </h3>
          <input
            name="noiseLevel"
            type="range"
            min="0"
            max="5"
            value={values.noiseLevel}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label htmlFor="overnightGuests">
            <h3>Roommate with overnight {`guest(s)`} cool?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="overnightGuests"
            value={"Yes"}
            checked={values.overnightGuests === "Yes"}
          />
          Yes
          <input
            onChange={onChange}
            type="radio"
            name="overnightGuests"
            value={"No"}
            checked={values.overnightGuests === "No"}
          />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="sexualOrientation">
            <h3>Do you care about your roomate's sexual orientation?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="sexualOrientation"
            value={"Straight"}
            checked={values.sexualOrientation === "Straight"}
          />
          Straight
          <input
            onChange={onChange}
            type="radio"
            name="sexualOrientation"
            value={"LGBTQIA+"}
            checked={values.sexualOrientation === "LGBTQIA+"}
          />
          LGBTQIA+
          <input
            onChange={onChange}
            type="radio"
            name="sexualOrientation"
            value={"No Preference"}
            checked={values.sexualOrientation === "No Preference"}
          />
          No Preference
        </div>
        <br></br>
        <div>
          <label htmlFor="politicalViews">
            <h3>Do you care about your roommate's political views?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="politicalViews"
            value={"Democrat"}
            checked={values.politicalViews === "Democrat"}
          />
          Democrat
          <input
            onChange={onChange}
            type="radio"
            name="politicalViews"
            value={"Republican"}
            checked={values.politicalViews === "Republican"}
          />
          Republican
          <input
            onChange={onChange}
            type="radio"
            name="politicalViews"
            value={"No Preference"}
            checked={values.politicalViews === "No Preference"}
          />
          No Preference
        </div>
        <br></br>
        <div>
          <label htmlFor="religion">
            <h3>Do you care about your roommate's religion?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Christian"}
            checked={values.religion === "Christian"}
          />
          Christian
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Jewish"}
            checked={values.religion === "Jewish"}
          />
          Jewish
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Muslim"}
            checked={values.religion === "Muslim"}
          />
          Muslim
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Buddhist"}
            checked={values.religion === "Buddhist"}
          />
          Buddhist
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Hindu"}
            checked={values.religion === "Hindu"}
          />
          Hindu
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Atheist"}
            checked={values.religion === "Atheist"}
          />
          Atheist
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Non-Religious"}
            checked={values.religion === "Non-Religious"}
          />
          Non-Religious
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"No Preference"}
            checked={values.religion === "No Preference"}
          />
          No Preference
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateUserPreferences;
