import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getCommits} from "../actions";

class Commits extends Component{
	render(){
		console.log("commits detail ", this.props);
		return(
			<div className="column col-6">
				<figure className="avatar badge avatar-xl" data-badge="8" data-initial="YZ">
				  <img src={this.props.git.user.avatar_url} alt="YZ" />
				</figure>
			</div>
		);	
	}
}

function mapStateToProps(state){
	return{
		git:state.git,
		repo:state.repo
	}
}
function mapDistpatchToProps(dispatch){
	return bindActionCreators({getCommits},dispatch);
}

export default connect(mapStateToProps,mapDistpatchToProps)(Commits);