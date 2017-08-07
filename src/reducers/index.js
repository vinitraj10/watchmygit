import {combineReducers} from 'redux';
import UserReducer from './reducer-user';

const rootReducer = combineReducers({
	git:UserReducer
});

export default rootReducer;