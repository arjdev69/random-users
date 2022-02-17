import produce from 'immer';

const INITIAL_STATE = {
  loading: true,
  users: [],
};

export default function users(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@users/GET_LIST_USERS_SUCCESS': {
        draft.loading = true;
        break;
      }
      case '@users/SET_LIST_USERS_SUCCESS': {
        draft.loading = false;
        draft.users = action.payload.users;
        break;
      }
      default:
    }
  });
}
