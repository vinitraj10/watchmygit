import {FETCHING_REPO} from "../actions";
import {FETCHED_REPO} from "../actions";

const intialState = {
	isFetching:false,
	isFetched:false,
	repos: []
}

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_REPO:
			return {...state,isFetching:true}
			break;
		case FETCHED_REPO:
			return {...state,isFetched:true,isFetching:false,repos:action.payload.data}
			break;
	}
	return state;
}