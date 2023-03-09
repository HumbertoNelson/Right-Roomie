import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToUserInfo } from "../store";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  console.log("this is id", id);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addToUserInfo(id));
  };

  return (
    <div>
      <h1>Please Answer The Following Questions About Yourself</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cleanliness">How clean are you?</label>
        <select name="cleanliness">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label htmlFor="pets">Do you have pets?</label>
        <input type="radio" name="hasPets" value="Yes" />
        Yes
        <input type="radio" name="hasPets" value="No" />
        No
        <label htmlFor="smoking">Do you smoke?</label>
        <input type="radio" name="smoking" value="Yes" />
        Yes
        <input type="radio" name="smoking" value="No" />
        No
        <label htmlFor="age">How old are you?</label>
        <input type="text" name="age" />
        <label htmlFor="smoking">Do you participate in drug use?</label>
        <input type="radio" name="drugs" value="Yes" />
        Yes
        <input type="radio" name="drugs" value="No" />
        No
        <label htmlFor="gender">What gender do you identify with?</label>
        <select name="gender">
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
          <option value={"Nonbinary"}>Nonbinary</option>
          <option value={"Transgender"}>Transgender</option>
          <option value={"Prefer not to respond"}>Prefer not to respond</option>
        </select>
        <label htmlFor="Sexual Orientation">
          Which sexual orientation do you identify with?
        </label>
        <select name="sexualOrientation">
          <option value={"Straight"}>Straight</option>
          <option value={"LGBTQIA+"}>LGBTQIA+</option>
          <option value={"Prefer not to respond"}>Prefer not to respond</option>
        </select>
        <label htmlFor="work schedule">What is your work schedule like?</label>
        <select name="workSchedule">
          <option value={"Week Days"}>Week Days</option>
          <option value={"Nights"}>Nights</option>
          <option value={"Weekends"}>Weekends</option>
        </select>
        <label htmlFor="social level">How social are you?</label>
        <select name="socialLevel">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label htmlFor="noise level">
          Do you listen to loud music or enjoy activities that are noisey?
        </label>
        <select name="noiseLevel">
          <option value={1}>Never. I like headphones</option>
          <option value={2}>I enjoy having low background TV</option>
          <option value={3}>The ocassional dance party</option>
          <option value={4}>I love my bluetooth speaker</option>
          <option value={5}>I'm a drummer</option>
        </select>
        <label htmlFor="overnight guests">
          Are you going to have other people sleep over?
        </label>
        <input type="radio" name="overnightGuests" value="Yes" />
        Yes
        <input type="radio" name="overnightGuests" value="No" />
        No
        <input type="radio" name="overnightGuests" value="Sometimes" />
        Sometimes
        <label htmlFor="Political Views">
          How would you identify politically?
        </label>
        <select name="politicalViews">
          <option value={"Democrat"}>Democrat</option>
          <option value={"Republican"}>Republican</option>
          <option value={"Neither"}>Neither</option>
        </select>
        <label htmlFor="Religious Views">
          How would you identify religiously?
        </label>
        <select name="religion">
          <option value={"Democrat"}>Democrat</option>
          <option value={"Republican"}>Republican</option>
          <option value={"Neither"}>Neither</option>
        </select>
        <button type="submit">Save Info</button>
      </form>
    </div>
  );
};

export default UserInfo;
