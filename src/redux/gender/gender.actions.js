export const SET_GENDERS = "SET_GENDERS";

export function setGenders(genders) {
  return {
    type: SET_GENDERS,
    payload: genders,
  };
}
