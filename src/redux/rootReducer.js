import { combineReducers } from "redux";
import { genderReducer } from "./gender/gender.reducers";
import usersReducer from "./users/users.reducer";

export const rootReducer = combineReducers({
  user: usersReducer,
  gender: genderReducer,
});
