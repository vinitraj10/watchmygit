import React,{Component} from "react";
import {connect} from "react-redux";

class Commits extends Component{
	render(){
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

export default connect(mapStateToProps)(Commits);