import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../_store/_actions/counter-actions';
import Button from '@material-ui/core/Button';
import './counter.css'

export const Counter = () => {

  const incrementValue = 1;
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  return (
    <div className="container">
      <div>
        <Button variant="contained" color="primary" style={{margin: '30px'}}
          onClick={() => dispatch(actions.onIncrementAsync({ incrementValue }))}
        >
          INCREMENT
        </Button>
        <Button variant="contained" color="primary" style={{margin: '30px'}}
          onClick={() => dispatch(actions.onDecrementAsync({ incrementValue }))}
        >
          DECREMENT
        </Button>
        </div>
        <div>
        <h1>Counter:</h1>
        <h1>{count}</h1>
      </div>
    </div>
  );
};
