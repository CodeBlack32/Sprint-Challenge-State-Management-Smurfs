import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../Store/Actions/Action";

const SmurfForm = ({ getSmurf, name, age, height }) => {
  return (
    <div className="container">
      <input
        type="text"
        name={name}
        age={age}
        height={height}
        // onchange={newSmurf}
        placeholder="Add New Smurf"
      />
      <button onClick={getSmurf}>Add Smurf</button>
      <ul>
        <li>
          {/* {state.items.map(item => {
            return <p className="smurf-form">{item.}</p>;
          })} */}
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
