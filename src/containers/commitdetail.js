import React,{Component} from "react";
import Commits from "./commits";
import {connect} from "react-redux";

class CommitDetail extends Component{
	render(){
		const username =this.props.git.user.login;
		const avatar= this.props.git.user.avatar_url;
		return(
			<div className="columns">
				<Commits username = {username} avatar={avatar}/>
				<div className="column col-6">There</div>
			</div>
		)
	}
} 

function mapStateToProps(state){
	return{
		git:state.git,
		repo:state.repo
	}
}
export default connect(mapStateToProps)(CommitDetail);