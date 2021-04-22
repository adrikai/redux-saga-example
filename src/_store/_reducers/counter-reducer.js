import {INCREMENT,DECREMENT} from '../../_const/counter-const'

export function reducer(state = 0, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default: 
      return state;
  }
}