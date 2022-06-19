import { SET_GENDERS } from "./gender.actions";

const initialState = {
  genders: [],
};

export const genderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENDERS:
      return {
        ...state,
        genders: action.payload,
      };
    default:
      return state;
  }
};
