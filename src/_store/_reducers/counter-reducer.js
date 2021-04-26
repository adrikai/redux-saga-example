import { INCREMENT, DECREMENT } from '../../_const/counter-const';

export function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data;
    case DECREMENT:
      return state - action.data;
    default:
      return state;
  }
}
