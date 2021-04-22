import {put, takeEvery, all, call, delay} from 'redux-saga/effects';
import {INCREMENT, DECREMENT, INCREMENT_ASYNC} from '../../_const/counter-const'

function* incrementAsync() {
  yield put({type: INCREMENT});
  yield delay(1000);
  yield put ({type: INCREMENT});
  yield delay(1000);
  yield put ({type: DECREMENT});
  yield delay(1000);
}

function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

export function* rootSagas() {
  yield all([watchIncrementAsync()])
}