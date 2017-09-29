import {combineReducers} from 'redux';
//Git Watcher Reducer
import UserReducer from './gitwatcher/reducer-user';
import RepoReducer from "./gitwatcher/reducer-repo";
import CommitReducer from "./gitwatcher/reducer-commit";
//Hck2k17 Tshirt Winning Checker Reducer
import HackReducer from './hck2k17/reducer-hck';

const rootReducer = combineReducers({
	git:UserReducer,
	repo:RepoReducer,
	commits:CommitReducer,
	hck:HackReducer
});

export default rootReducer;