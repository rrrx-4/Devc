import { SET_ALERT, REMOVE_ALERT } from '../action/types';

const initialState = [];
export default function foo(state = initialState, action) {
  // action contain two thing payload and type
  const { type, payload } = action; // this is similar to  action.data , destructring  data

  //  depending upon the type it set state
  //  if SET_ALERT then add payload means new alert
  //  if REMOVE_ALERT then remove that alert by its id
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload); // here is in payload we are passing id of removing alert
    default:
      return state;
  }
}
