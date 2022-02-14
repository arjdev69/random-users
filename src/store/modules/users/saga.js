import { takeLatest, call, put, all } from 'redux-saga/effects';
//import { toast } from 'react-toastify';
import api from '@/services/api';

import { setListUsersSuccess } from './actions';

export function* getListUsers({}) {
  try {
    const response = yield call(api.get, '/?results=10');
    yield put(setListUsersSuccess(response.data));
  }
  catch (err) {
    console.log('Erro ao atualizar perfil, confira seus dados!');
    yield put(setListUsersSuccess([]));
  }
}
export default all([takeLatest('@users/GET_LIST_USERS_SUCCESS', getListUsers)]);
