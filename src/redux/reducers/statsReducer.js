import { ActionTypes } from '../constants/action-types';

const initialState = {
  totalBacked: 89914,
  totalBackers: 5007,
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_STATS:
      return {
        ...state,
        totalBacked: state.totalBacked + 1,
        totalBackers: state.totalBackers + 1,
      };
    default:
      return state;
  }
};
