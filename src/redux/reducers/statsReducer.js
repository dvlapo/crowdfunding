import { ActionTypes } from '../constants/action-types';

const initialState = [
  {
    totalBacked: 59000,
    totalBackers: 500,
  },
];

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_STATS:
      return [
        {
          ...state,
          totalBacked: action.totalBacked + state[0].totalBacked,
          totalBackers: action.totalBackers + state[0].totalBackers,
        },
      ];

    case ActionTypes.SET_STATS:
      return state;
    default:
      return state;
  }
};
