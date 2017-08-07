import {FETCH_USER} from "../actions";
export default function(state=null,action){
	switch (action.type) {
		case FETCH_USER:
			return action.payload.data;
	};
	return state;
}