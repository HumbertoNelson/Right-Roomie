import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo } from "../store";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Link } from "react-router-dom";

const UpdateUserInfo = (props) => {
  let slider = document.getElementById("myRange");
  var output = document.getElementById("cleanlinessRange");
  const { auth, userInfo } = useSelector((state) => state);
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  console.log("this is values", values);
  useEffect(() => {
    const fetchUserInfo = async (id) => {
      try {
        const response = await axios.get(`/api/users/userinfo/${id}`);
        console.log('response', response)
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
    slider = function (ev) {
      output.innerHTML = ev.value;
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("these are values", values);
    dispatch(updateUserInfo(values, auth.id));
  };

  return (
    <div className='card'>
      <Card sx={{ width: '75%', position: "center", mt: 5 }} elevation={10} >
        <CardContent>
          <CardHeader
            title={<Typography variant="h5" component="div">
            Information About You
            </Typography>}
            />  
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
          <CardActions>  
            <Button variant='contained' color='success' type='submit' sx={{mr: 2}}>Update</Button>
            <Link to='/home'><Button variant='contained' color='success'>Back to Dashboard</Button></Link>
            </CardActions> 
        </form>
        </CardContent>
        </Card>
    </div>
  );
};

export default UpdateUserInfo;
