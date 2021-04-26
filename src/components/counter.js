import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../_store/_actions/counter-actions';

export const Counter = () => {

  const incrementValue = 1;
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  return (
    <>
      <div>
        <button
          onClick={() => dispatch(actions.onIncrementAsync({ incrementValue }))}
        >
          INCREMENT
        </button>
        <button
          onClick={() => dispatch(actions.onDecrementAsync({ incrementValue }))}
        >
          DECREMENT
        </button>
        <h1>{count}</h1>
      </div>
    </>
  );
};
