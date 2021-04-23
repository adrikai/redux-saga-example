import { put, takeEvery, all, call } from 'redux-saga/effects';
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC,
} from '../../_const/counter-const';

const newPromise = (incrementValue) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(incrementValue);
    }, 500);
  });
};

function* incrementAsync({ incrementValue }) {
  const data = yield call(newPromise, incrementValue);
  yield put({
    type: INCREMENT,
    data,
  });
}

function* decrementAsync({ incrementValue }) {
  const data = yield call(newPromise, incrementValue);
  yield put({
    type: DECREMENT,
    data,
  });
}

function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

function* watchDecrementAsync() {
  yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}

export function* rootSagas() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}
