export const SET_USERS = "SET_USERS";

export function setUsers(userlist) {
  return {
    type: SET_USERS,
    payload: userlist,
  };
}
