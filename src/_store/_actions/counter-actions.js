import { DECREMENT_ASYNC, INCREMENT_ASYNC } from '../../_const/counter-const';

export const onIncrementAsync = ({ incrementValue }) => ({
  type: INCREMENT_ASYNC,
  incrementValue,
});

export const onDecrementAsync = ({ incrementValue }) => ({
  type: DECREMENT_ASYNC,
  incrementValue,
});
