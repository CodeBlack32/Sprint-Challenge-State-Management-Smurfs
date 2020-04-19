import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../Store/Actions/Action";

const Smurfs = props => {
  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <div className="container">
      <ul>
        {props.isRecieving ? <h1>Fetching...</h1> : null}
        {props.smurfs.map(smurf => (
          <li key={smurf.id}>
            <p className="smurf-form">
              Name: {smurf.name}
              <br></br>
              Age: {smurf.age}
              <br></br>
              Height: {smurf.height}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { isRecieving: state.isRecieving, smurfs: state.smurfs };
};

export default connect(mapStateToProps, { getSmurf })(Smurfs);
