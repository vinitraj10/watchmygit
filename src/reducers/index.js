import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import RepoReducer from "./reducer-repo";
import CommitReducer from "./reducer-commit";

const rootReducer = combineReducers({
	git:UserReducer,
	repo:RepoReducer,
	commits:CommitReducer
});

export default rootReducer;