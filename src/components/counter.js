import React from 'react';
import { connect } from 'react-redux';
import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from '../_const/counter-const';

 const Counter = ({count, onIncrementAsync, onIncrement, onDecrement}) => {
  return (
    <>
    <div>
      <button onClick={onIncrement}>INCREMENT</button>
      <button onClick={onDecrement}>DECREMENT</button>
      <button onClick={onIncrementAsync}>ASYNC</button>
      <h1>{count}</h1>
    </div>
    </>
  )
}

const action = (type) => () => ({ type });
export const Counters = connect((state) => ({ count: state }), {
  onIncrement: action(INCREMENT),
  onDecrement: action(DECREMENT),
  onIncrementAsync: action(INCREMENT_ASYNC),
})(Counter);