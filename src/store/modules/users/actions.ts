export function getListUsersSuccess() {
  return {
    type: '@users/GET_LIST_USERS_SUCCESS',
    payload: {},
  };
}

export function setListUsersSuccess(users) {
  return {
    type: '@users/SET_LIST_USERS_SUCCESS',
    payload: { users },
  };
}
