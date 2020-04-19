import axios from "axios";

export const GETTING_SMURF = "GETTING_SMURF";
export const RECIEVED_SMURF = "RECIEVED_SMURF";
export const LOST_SMURF = "LOST_SMURF";
export const SHOW_SMURF = "SHOW_SMURF";
export const DISPLAYING_SMURF = "DISPLAYING_SMURF";
export const SMURF_FAILURE = "SMURF_FAILURE";

export const getSmurf = () => dispatch => {
  dispatch({
    type: GETTING_SMURF
  });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("results", res);

      dispatch({
        type: RECIEVED_SMURF,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("error", err);

      dispatch({
        type: LOST_SMURF,
        payload: `${err.response.message} with response code ${err.response.code}`
      });
    });
};

export const addSmurf = data => dispatch => {
  dispatch({ type: SHOW_SMURF });
  axios
    .post("http://localhost:3333/smurfs", data)
    .then(res => {
      dispatch({ type: DISPLAYING_SMURF, payload: res.data });
    })
    .catch(err => dispatch({ type: SHOW_SMURF, payload: err.message }));
};
