import axios from "axios";

export const FETCH_USER = 'FETCH_USER';

export function getUser(username){
	const root_url = "https://api.github.com/users/";
	const url = `${root_url}${username}`
	const request = axios.get(url);
	return {
		type : FETCH_USER,
		payload : request
	}
} 