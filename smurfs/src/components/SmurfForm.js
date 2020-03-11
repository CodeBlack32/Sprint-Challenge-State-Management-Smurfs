import React, { useState } from "react";
import { addSmurf } from "../Store/Actions/Action";
import { useDispatch } from "react-redux";

const SmurfForm = props => {
  const [state, setState] = useState({
    name: "",
    age: "",
    height: ""
  });
  const dispatch = useDispatch();
  const smurfChange = e => {
    e.preventDefault(e);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSmurf(state));
    setState({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        type="text"
        onChange={smurfChange}
        placeholder="Smurf Name"
      />
      <input
        name="age"
        value={state.age}
        type="text"
        onChange={smurfChange}
        placeholder="Smurf Age"
      />
      <input
        name="height"
        value={state.height}
        type="text"
        onChange={smurfChange}
        placeholder="Smurf Height"
      />
      <button type="submit">Add Smurf</button>
    </form>
  );
};

export default SmurfForm;
