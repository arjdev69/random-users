import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '@/services/api';

import { setListUsersSuccess } from './actions';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* getListUsers({}) {
  try {
    yield delay(2000)
    const response = yield call(api.get, '/?results=10');
    yield put(setListUsersSuccess(response.data));
  }
  catch (err) {
    console.log('Erro ao atualizar perfil, confira seus dados!');
    yield put(setListUsersSuccess([]));
  }
}

export default all([takeLatest('@users/GET_LIST_USERS_SUCCESS', getListUsers)]);
