import { ADD_SELECTED_SERVICE, REMOVE_SELECTED_SERVICE } from "../actions/selectedServices.action";

// Reducer
const initialState = [];

const selectedServicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_SERVICE:
      console.log(action.payload)
      return [...state, action.payload];
    case REMOVE_SELECTED_SERVICE:
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};

export default selectedServicesReducer;
