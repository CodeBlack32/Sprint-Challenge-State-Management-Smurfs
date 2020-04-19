import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import getSmurf from "../Store/Actions/Action";

const SmurfList = () => {
  const NewSmurf = 
  if (receiving) {
    return <h2>Getting Smurf</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Message: {message}</h2>
      <button onClick={getSmurf}>Add Smurf</button>
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

export default connect(mapStateToProps, { getSmurf })(NewSmurf);
