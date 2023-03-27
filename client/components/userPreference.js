import React, { useState } from "react";
import { fetchUserPreference } from "../store/userPreference";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams, Redirect } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const userPreference = () => {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("cleanlinessRange");
  const dispatch = useDispatch();
  const { id } = useParams();
  const { auth } = useSelector((state) => state);

  const [preference, setPreference] = useState({
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
    politicalViews: "",
    religion: "",
    userId: auth.id,
  });

  const onChange = (ev) => {
    let onChange = {
      setPreference: setPreference({
        ...preference,
        [ev.target.name]: ev.target.value,
      }),
      slider: (slider = function (ev) {
        output.innerHTML = ev.value;
      }),
    };
  };
  const getPreference = async (ev) => {
    ev.preventDefault();
    dispatch(fetchUserPreference(preference, id));
    //setPreference(preference);
    //Taking 'preference' from useState
    //and adding the answers from the form and updating the values in preference
  };

  return (
    <div className='card'>
      <Card sx={{ width: '75%', position: "center", mt: 5 }} elevation={10} >
        <CardContent>
          <CardHeader
            title={<Typography variant="h5" component="div">
            Preferences For Your Roommate
            </Typography>}
            />
      <form onSubmit={getPreference}>
        <div className="slidecontainer">
          <h3 id="cleanlinessRange">
            Cleanliness level you expect: {preference.cleanliness.toString()}
          </h3>
          <input
            name="cleanliness"
            type="range"
            min="0"
            max="5"
            value={preference.cleanliness}
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
          />
          Yes
          <input
            onChange={onChange}
            type="radio"
            name="allowPets"
            value={"No"}
          />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="smoking">
            <h3>Is a roommate that smokes a dealbreaker?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="smoking"
            value={"Yes"}
          />
          Yes
          <input onChange={onChange} type="radio" name="smoking" value={"No"} />
          No
        </div>
        <br></br>
        <div className="slidecontainer">
          <h3 id="minAge">Minimum Age:{preference.minAge}</h3>
          <input
            name="minAge"
            type="range"
            min="18"
            max="100"
            value={preference.minAge}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <div className="slidecontainer">
          <h3 id="maxAge">Maximum Age:{preference.maxAge.toString()}</h3>
          <input
            name="maxAge"
            type="range"
            min=""
            max="100"
            value={preference.maxAge}
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
          <input onChange={onChange} type="radio" name="drugs" value={"Yes"} />
          Yes
          <input onChange={onChange} type="radio" name="drugs" value={"No"} />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="gender">
            <h3>Do you prefer your roommate to be a certain gender?</h3>
          </label>
          <select onChange={onChange} name="gender" value={preference.gender}>
            <option value={""}> </option>
            <option value={(preference.gender = "Male")}>Male</option>
            <option value={(preference.gender = "Female")}>Female</option>
            <option value={(preference.gender = "Non-binary")}>Nonbinary</option>
            <option value={(preference.gender = "Transgender")}>Transgender</option>
            <option value={(preference.gender = "No Preference")}>
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
            value={preference.sexualOrientation}
          >
            <option value={""}></option>
            <option value={"Straight"}>Straight</option>
            <option value={"LGBTQIA+"}>LGBTQIA+</option>
            <option value={"No Preference"}>
              No Preference
            </option>
          </select>
        </div>
        <br></br>
        <div>
          <label htmlFor="workSchedule">
            <h3>What's your preferred work schedule in a roomate?</h3>
          </label>
          <select
            onChange={onChange}
            name="workSchedule"
            value={preference.workSchedule}
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
            Social level you're comfortable with:{" "}
            {preference.socialLevel.toString()}
          </h3>
          <input
            name="socialLevel"
            type="range"
            min="0"
            max="5"
            value={preference.socialLevel}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div className="slidecontainer">
          <h3 id="noiseLevel">
            Noise level you're comfortable with:{" "}
            {preference.noiseLevel.toString()}
          </h3>
          <input
            name="noiseLevel"
            type="range"
            min="0"
            max="5"
            value={preference.noiseLevel}
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
          />
          Yes
          <input
            onChange={onChange}
            type="radio"
            name="overnightGuests"
            value={"No"}
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
            value={preference.politicalViews}
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
            value={preference.religion}
          >
            <option value={""}></option>
            <option value={"Christian"}>Christian</option>
            <option value={"Jewish"}>Jewish</option>
            <option value={"Muslim"}>Muslim</option>
            <option value={"Buddhist"}>Buddhist</option>
            <option value={"Hindu"}>Hindu</option>
            <option value={"Atheist"}>Atheist</option>
            <option value={"Non-Religious"}>Non-Religious</option>
            <option value={"No Preference"}>
              No Preference
            </option>
          </select>
        </div>
        <CardActions>
          <Link to='/home'><Button variant='contained' color='success'>Save Preferences</Button></Link>
        </CardActions>
      </form>
      </CardContent>
      </Card>
    </div>
  );
};

export default userPreference;
