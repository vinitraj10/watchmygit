import React,{Component} from "react";
import {connect} from "react-redux";
import Commits from "./commits";
import CommitGraph from "./commitgraph"

class MainCommit extends Component{
	render(){
		const username =this.props.git.user.login;
		const avatar= this.props.git.user.avatar_url;
		const commits = this.props.commits;
		return(
			<div className="columns">
				<Commits username = {username} avatar={avatar} commits={commits}/>
			</div>
		)
	}
} 

function mapStateToProps(state){
	return{
		git:state.git,
		repo:state.repo,
		commits:state.commits
	}
}
export default connect(mapStateToProps)(MainCommit);