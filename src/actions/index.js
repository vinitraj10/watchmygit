import axios from "axios";
export const FETCHING_USER = 'FETCHING_USER';
export const FETCHED_USER = 'FETCHED_USER';
export const ERROR = 'ERROR';


export function getUser(username){
	const root_url = "https://api.github.com/users/";
	const url = `${root_url}${username}`
	const request = axios.get(url)
	
	// vanilla redux expects to return object of action type and data etc .

	return (dispatch) =>{
		dispatch({type:FETCHING_USER});
		request.then((response) => {
			dispatch({type:FETCHED_USER,payload:response});
		})
		.catch((err)=>{
			dispatch({type:ERROR,payload:err});
		})
	}

} 