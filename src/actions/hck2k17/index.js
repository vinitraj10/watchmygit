import axios from 'axios';
import {
	FETCHING_PR,
	FETCHED_PR,
	ERROR,
} from './types';

const url = 'https://hck2k17.herokuapp.com/prchecker/';

export function getPr(username){
	const formData = {
		username:username
	};
	return (dispatch) =>{
		dispatch({type:FETCHING_PR});
		axios.post(url,formData)
		.then((response)=>{
			dispatch({type:FETCHED_PR,payload:response.data});
		})
	}
}