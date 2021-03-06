import { ActionTypes } from '../constants/action-types';

export const setStats = (stats) => {
  return {
    type: ActionTypes.SET_STATS,
    payload: stats,
  };
};

export const updateStats = (totalBacked, totalBackers) => {
  return {
    type: ActionTypes.UPDATE_STATS,
    totalBacked,
    totalBackers,
  };
};
