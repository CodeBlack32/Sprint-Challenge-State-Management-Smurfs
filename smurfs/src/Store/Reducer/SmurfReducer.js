import {
  GETTING_SMURF,
  RECIEVED_SMURF,
  LOST_SMURF,
  SHOW_SMURF,
  DISPLAYING_SMURF,
  SMURF_FAILURE
} from "../Actions/Action";

export const initialState = {
  isRecieving: false,
  isDisplaying: false,
  smurfs: [],
  error: ""
};

export const SmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURF:
      return {
        ...state,
        isRecieving: true
      };
    case RECIEVED_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        isRecieving: false,
        error: ""
      };
    case LOST_SMURF:
      return {
        ...state,
        isRecieving: false,
        error: action.payload
      };
    case SHOW_SMURF:
      return {
        ...state,
        isDisplaying: true
      };
    case DISPLAYING_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        isDisplaying: false,
        error: ""
      };
    case SMURF_FAILURE:
      return {
        ...state,
        isDisplaying: false,
        error: action.payload
      };
    default:
      return state;
  }
};
