import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToUserInfo } from "../store";
import { useParams } from "react-router-dom";
import history from '../history';

const UserInfo = (props) => {
  let slider = document.getElementById("myRange");
  var output = document.getElementById("cleanlinessRange");
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    cleanliness: 0,
    hasPets: "",
    smoking: "",
    age: "",
    drugs: "",
    gender: "",
    sexualOrientation: "",
    workSchedule: "",
    socialLevel: 0,
    noiseLevel: 0,
    overnightGuests: "",
    politicalViews: "",
    religion: "",
    userId: auth.id,
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    slider = function (ev) {
      output.innerHTML = ev.value;
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addToUserInfo(values));
    history.push('/userPreference')
  };

  return (
    <div>
      <h1>Update Your Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="slidecontainer">
          <label htmlFor="cleanliness">
            <h3 id="cleanlinessRange">
              How clean are you?: {values.cleanliness}
            </h3>
          </label>
          <input
            name="cleanliness"
            type="range"
            min="0"
            max="5"
            value={values.cleanliness}
            className="slider"
            id="myRange"
            onChange={handleChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label htmlFor="pets">
            <h3>Do you have pets?</h3>
          </label>
          <input
            onChange={handleChange}
            type="radio"
            name="hasPets"
            value={"Yes"}
          />
          Yes
          <input
            onChange={handleChange}
            type="radio"
            name="hasPets"
            value={"No"}
          />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="smoking">
            <h3>Do you smoke?</h3>
          </label>
          <input
            onChange={handleChange}
            type="radio"
            name="smoking"
            value={"Yes"}
          />
          Yes
          <input
            onChange={handleChange}
            type="radio"
            name="smoking"
            value={"No"}
          />
          No
        </div>
        <br></br>
        <div className="slidecontainer">
          <label htmlFor="age">
            <h3>How old are you?: {values.age}</h3>
          </label>
          <input
            onChange={handleChange}
            type="range"
            name="age"
            min="18"
            max="100"
            className="slider"
            id="myRange"
            value={values.age}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="smoking">
            <h3>Do you participate in drug use?</h3>
          </label>
          <input
            onChange={handleChange}
            type="radio"
            name="drugs"
            value={"Yes"}
          />
          Yes
          <input
            onChange={handleChange}
            type="radio"
            name="drugs"
            value={"No"}
          />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="gender">
            <h3>What gender do you identify with?</h3>
          </label>
          <select onChange={handleChange} name="gender" value={values.gender}>
            <option value={""}> </option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Nonbinary"}>Nonbinary</option>
            <option value={"Transgender"}>Transgender</option>
            <option value={"Prefer not to respond"}>
              Prefer not to respond
            </option>
          </select>
        </div>
        <br></br>
        <div>
          <label htmlFor="Sexual Orientation">
            <h3>Which sexual orientation do you identify with?</h3>
          </label>
          <select
            onChange={handleChange}
            name="sexualOrientation"
            value={values.sexualOrientation}
          >
            <option value={""}></option>
            <option value={"Straight"}>Straight</option>
            <option value={"LGBTQIA+"}>LGBTQIA+</option>
            <option value={"Prefer not to respond"}>
              Prefer not to respond
            </option>
          </select>
        </div>
        <br></br>
        <div>
          <label htmlFor="work schedule">
            <h3>What is your work schedule like?</h3>
          </label>
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
        </div>
        <br></br>
        <div className="slidecontainer">
          <label htmlFor="social level">
            <h3>How social are you? {values.socialLevel}</h3>
          </label>
          <input
            name="socialLevel"
            type="range"
            min="0"
            max="5"
            value={values.socialLevel}
            className="slider"
            id="myRange"
            onChange={handleChange}
          ></input>
        </div>
        <br></br>
        <div className="slidecontainer">
          <label htmlFor="noise level">
            <h3>
              Do you listen to loud music or enjoy activities that are noisey?:{" "}
              {values.noiseLevel}
            </h3>
          </label>
          <input
            name="noiseLevel"
            type="range"
            min="0"
            max="5"
            value={values.noiseLevel}
            className="slider"
            id="myRange"
            onChange={handleChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label htmlFor="overnight guests">
            <h3>Are you going to have other people sleep over?</h3>
          </label>
          <input
            onChange={handleChange}
            type="radio"
            name="overnightGuests"
            value={"Yes"}
          />
          Yes
          <input
            onChange={handleChange}
            type="radio"
            name="overnightGuests"
            value={"No"}
          />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="Political Views">
            <h3>How would you identify politically?</h3>
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
        </div>
        <br></br>
        <div>
          <label htmlFor="Religious Views">
            <h3>How would you identify religiously?</h3>
          </label>
          <select
            onChange={handleChange}
            name="religion"
            value={values.religion}
          >
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
            <option value={"Prefer not to respond"}>
              Prefer not to respond
            </option>
          </select>
        </div>
        <br></br>
        <button type="submit">Save Info</button>
      </form>
    </div>
  );
};

export default UserInfo;
