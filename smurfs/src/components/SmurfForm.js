import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../Store/Actions/Action";
import { initialState, SmurfReducer } from "../Store/Reducer";

const SmurfForm = ({ getSmurf, name, age, height }) => {
  const smurfChange = e => {
    e.preventDefault(e);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={name}
        onchange={smurfChange}
        placeholder="Smurf Name"
      />
      <input
        type="text"
        value={age}
        onchange={smurfChange}
        placeholder="Smurf Age"
      />
      <input
        type="text"
        value={height}
        onchange={smurfChange}
        placeholder="Smurf Height"
      />
      <button onClick={getSmurf}>Add Smurf</button>
      <ul>
        <li>
          {state.smurfs.map(item => {
            return <p className="smurf-form">{newSmurf}</p>;
          })}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfForm);
