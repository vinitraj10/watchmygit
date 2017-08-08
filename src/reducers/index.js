import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import RepoReducer from "./reducer-repo";

const rootReducer = combineReducers({
	git:UserReducer,
	repo:RepoReducer
});

export default rootReducer;