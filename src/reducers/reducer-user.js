import {FETCHING_USER} from "../actions";
import {FETCHED_USER} from "../actions";
import {ERROR} from "../actions";

const intialState = {
	isFetching: false,
	isFetched : false,
	user:[],
	error:null
}

export default function (state=intialState,action){
	switch (action.type) {
		case FETCHING_USER:
			return {...state,isFetching:true}
			break;
		
		case FETCHED_USER:
			return {...state,isFetched:true,isFetching:false,user:action.payload.data}
			break;
		
		case ERROR:
			return {...state,isFetching:false,error:action.payload.data}
			break;
	}
	return state;
}