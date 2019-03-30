/* eslint camelcase: 1 */
import { call, put, select, takeEvery, delay } from 'redux-saga/effects';

import * as api from '../api';
import * as actions from '../store/actions';

function* enter (action) {
  console.log('enter', action);

  const { reference, usersRef, newEntry } = yield call(api.enter, action);

  yield put({
    type: actions.REF_DB,
    reference,
    usersRef,
    newEntry,
  });
}

function* exit (action) {
  const state = yield select();

  const { newEntry } = state;
  console.log('exit', action);
  console.log('state', state);

  yield call(api.exit, newEntry);

  yield put({
    type: actions.SAGAS_EXIT,
  });
}

function* rootSaga () {
  yield takeEvery(actions.ENTER, enter);
  yield takeEvery(actions.EXIT, exit);
}

export default rootSaga;
