import { ADD_SMURF, NEW_SMURF } from "../Actions/Action";

export const initialState = {
  smurfs: [{ name: "Brainey", age: 200, height: "5cm", id: Date.now() }]
};

export const SmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_SMURF:
    //   return {};
    case NEW_SMURF:
      return {
        smurfs: [...state.smurfs, { smurf: action.payload }]
      };
    default:
      return state;
  }
};
