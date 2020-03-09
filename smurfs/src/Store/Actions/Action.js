import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const NEW_SMURF = "NEW_SMURF";
export const SMURF_FAILURE = "SMURF_FAILURE";

const newSmurf = { name: "", age: "", height: "" };

export const getSmurf = () => dispatch => {
  dispatch({ type: ADD_SMURF });

  axios.get("http:localhost:3333/smurfs").then(res => {
    console.log("results", res);

    dispatch({
      type: NEW_SMURF,
      payload: { newSmurf }
    });
  });
  // .catch(err => {
  //   console.log("error", err);

  //   dispatch({
  //     type: SMURF_FAILURE,
  //     payload: `${err.response.message} with response code ${err.response.code}`
  //   });
  // });
};
