import {combineReducers} from 'redux';
import UserReducer from './reducer-user';

const rootReducer = combineReducers({
	user:UserReducer
});

export default rootReducer;