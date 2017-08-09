import axios from "axios";
//export statements of UserReducer

export const FETCHING_USER = 'FETCHING_USER';
export const FETCHED_USER = 'FETCHED_USER';
export const ERROR = 'ERROR';
//export statements for RepoReducer

export const FETCHING_REPO = 'FETCHING_REPO';
export const FETCHED_REPO = 'FETCHED_REPO';
//export statements for CommitReducer

export const FETCHING_COMMITS = 'FETCHING_COMMITS';
export const FETCHED_COMMITS = 'FETCHED_COMMITS';

export function getUser(username){
	const root_url = "https://api.github.com/users/";
	
	const url = `${root_url}${username}`;
	//Use this when rate of api request exhausted!!
	//const client_id = <your_client id>;
	//const client_secret = <your_client_secret>;
	//const rate_url = `${root_url}${username}?client_id=${client_id}&&client_secret=${client_secret}`;
	const request = axios.get(url);
	
	// vanilla redux expects to return object of action type and data etc .
	//redux thunk middleware will helps us to dispatch the function and help us to return a function instead of object.
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

export function getRepos(username){
	
	const root_url = "https://api.github.com/users/";
	const repo_url =  "/repos";
	const url = `${root_url}${username}${repo_url}`
	const request =axios.get(url);
	
	return (dispatch) => {
		dispatch({type:FETCHING_REPO});
		request.then((response)=>{
			dispatch({type:FETCHED_REPO,payload:response})
		});
	}
}

export function getCommits(username){
	const root_url = "https://api.github.com/users/";
	const commit_url = "/events/public";
	const url = `${root_url}${username}${commit_url}`;

	const request = axios.get(url);

	return (dispatch) =>{
		dispatch({type:FETCHING_COMMITS});
		request.then((response)=>{
			dispatch({type:FETCHED_COMMITS,payload:response});
		});
	}
} 