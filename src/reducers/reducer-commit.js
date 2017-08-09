import {FETCHING_COMMITS} from "../actions";
import {FETCHED_COMMITS} from "../actions";

const intialState = {
	isFetching:false,
	isFetched:false,
	commits:[]
}

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_COMMITS:
			return {...state,isFetching:true}
			break;
		case FETCHED_COMMITS:
			return {...state,isFetching:false,isFetched:true,commits:action.payload.data}
	}

	return state;
}