import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToUserInfo } from "../store";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToUserInfo(id));
  };

  return (
    <div>
      <h1>Please Answer The Following Questions About Yourself</h1>
      <form onSubmit={handleSubmit}>
        <label for="cleanliness">How clean are you?</label>
        <select name="cleanliness">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label for="pets">Do you have pets?</label>
        <input type="radio" name="hasPets" value="Yes">
          Yes
        </input>
        <input type="radio" name="hasPets" value="No">
          No
        </input>
        <label for="smoking">Do you smoke?</label>
        <input type="radio" name="smoking" value="Yes">
          Yes
        </input>
        <input type="radio" name="smoking" value="No">
          No
        </input>
        <label for="age">How old are you?</label>
        <input type="text" name="age" />
        <label for="smoking">Do you participate in drug use?</label>
        <input type="radio" name="drugs" value="Yes">
          Yes
        </input>
        <input type="radio" name="drugs" value="No">
          No
        </input>
        <button type="submit">Save Info</button>
      </form>
    </div>
  );
};
