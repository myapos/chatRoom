/* eslint camelcase: 1 */
import { call, put, select, takeEvery } from 'redux-saga/effects';

import * as api from '../api';
import * as actions from '../store/actions';

function* initialize () {
  // const initialized = yield call(api.getKinoData);
  console.log('initialized sagas');
}

function* enter (action) {
  console.log('enter', action);

  const { ref, usersRef, newEntry } = yield call(api.enter, action);
  let users = [];
  // Attach an asynchronous callback to read the data at our posts reference
  const snap = yield ref.on(
    'value',
    snapshot => {
      console.log('values:', snapshot.val());
      users = snapshot.val();
    },
    errorObject => {
      console.log('The read failed: ' + errorObject.code);
    }
  );

  yield put({
    type: actions.REF_DB,
    ref,
    usersRef,
    newEntry,
  });

  debugger;
  yield put({
    type: actions.LOGGED_USERS,
    loggedUsers: users,
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
  yield initialize();
  yield takeEvery(actions.ENTER, enter);
  yield takeEvery(actions.EXIT, exit);
}

export default rootSaga;
