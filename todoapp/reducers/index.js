import addReducer from './todo'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: addReducer
});

export default rootReducer;