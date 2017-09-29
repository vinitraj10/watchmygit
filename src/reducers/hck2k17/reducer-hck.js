import {
	FETCHING_PR,
	FETCHED_PR,
	ERROR,
	} from '../../actions/hck2k17/types';

const intialState = {
	isFetching:false,
	isFetched:false,
	data:null,
	error:null
}

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_PR:
			return {...state,isFetching:true}
		case FETCHED_PR:
			return {...state,isFetching:false,isFetched:true,data:action.payload}
		case ERROR:
			return {...state,isFetching:false,isFetched:false,error:"Some Error occured Please check the username"}
	}
	return state;
}