import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserPreferences } from "../store/userPreference";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Link } from "react-router-dom";

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
    <div className='card'>
      <Card sx={{ width: '75%', position: "center", mt: 5, backgroundColor: "#bed3de" }} elevation={10} >
        <CardContent>
          <CardHeader
            title={<Typography variant="h4" component="div">
            Information About You
            </Typography>}
            />  
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
            className='radio'
            onChange={onChange}
            type="radio"
            name="allowPets"
            value={"Yes"}
            checked={values.allowPets === "Yes"}
          />
          Yes
          <input
            className='radio'
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
            className='radio'
            onChange={onChange}
            type="radio"
            name="smoking"
            value={"Yes"}
            checked={values.smoking === "Yes"}
          />
          Yes
          <input
            className='radio'
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
            className='radio'
            onChange={onChange}
            type="radio"
            name="drugs"
            value={"Yes"}
            checked={values.drugs === "Yes"}
          />
          Yes
          <input
            className='radio'
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
          <h3>Do you prefer your roommate to be a certain gender?</h3>
              </label>
              <select
                onChange={onChange}
                name="gender"
                value={values.gender}
              >
                <option value={""}> </option>
                <option value={(values.gender = "Male")}>Male</option>
                <option value={(values.gender = "Female")}>Female</option>
                <option value={(values.gender = "Non-binary")}>
                  Nonbinary
                </option>
                <option value={(values.gender = "Transgender")}>
                  Transgender
                </option>
                <option value={(values.gender = "No Preference")}>
                  No Preference
                </option>
              </select>
        </div>
        <br></br>
        <div>
          <label htmlFor="sexualOrientation">
            <h3>Do you care about your roomate's sexual orientation?</h3>
          </label>
          <select
                onChange={onChange}
                name="sexualOrientation"
                value={values.sexualOrientation}
              >
                <option value={""}></option>
                <option value={"Straight"}>Straight</option>
                <option value={"LGBTQIA+"}>LGBTQIA+</option>
                <option value={"No Preference"}>No Preference</option>
              </select>
        </div>
        <br/>
        <div>
          <label htmlFor="workSchedule">
          <h3>What's your preferred work schedule in a roomate?</h3>
              </label>
              <select
                onChange={onChange}
                name="workSchedule"
                value={values.workSchedule}
              >
                <option value={""}></option>
                <option value={"Weekdays"}>Weekdays</option>
                <option value={"Nights"}>Nights</option>
                <option value={"Weekends"}>Weekends</option>
                <option value={"No Preference"}>No Preference</option>
              </select>
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
            className='radio'
            onChange={onChange}
            type="radio"
            name="overnightGuests"
            value={"Yes"}
            checked={values.overnightGuests === "Yes"}
          />
          Yes
          <input
            className='radio'
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
          <label htmlFor="politicalViews">
            <h3>Do you care about your roommate's political views?</h3>
          </label>
          <select
                onChange={onChange}
                name="politicalViews"
                value={values.politicalViews}
              >
                <option value={""}></option>
                <option value={"Democrat"}>Democrat</option>
                <option value={"Republican"}>Republican</option>
                <option value={"No Preference"}>No Preference</option>
              </select>
        </div>
        <br></br>
        <div>
          <label htmlFor="religion">
            <h3>Do you care about your roommate's religion?</h3>
          </label>
          <select
                onChange={onChange}
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
                <option value={"No Preference"}>No Preference</option>
              </select>
        </div>
        <br/>
        <CardActions>  
            <Button variant='contained' type='submit' sx={{ backgroundColor: "#28536b", mr: 2, ':hover': {backgroundColor: '#688697'} }}>Update</Button>
            <Link to='/home'><Button variant='contained' sx={{ backgroundColor: "#28536b", mr: 2, ':hover': {backgroundColor: '#688697'} }}>Back to Dashboard</Button></Link>
        </CardActions> 
      </form>
      </CardContent>
      </Card>
    </div>
  );
};

export default UpdateUserPreferences;
