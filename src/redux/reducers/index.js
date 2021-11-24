import { combineReducers } from 'redux';
import { statsReducer } from './statsReducer';

const reducers = combineReducers({
  stats: statsReducer,
});

export default reducers;
