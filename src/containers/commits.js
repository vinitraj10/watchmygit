import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getCommits} from "../actions";

class Commits extends Component{
	componentDidMount() {
		const username = this.props.username;
		this.props.getCommits(username);
	}
	render(){
		return(
			<div className="column col-6">
				<figure className="avatar badge avatar-xl" data-badge="8" data-initial="YZ">
				  <img src={this.props.avatar} alt="YZ" />
				</figure>
			</div>
		);	
	}
}


function mapDistpatchToProps(dispatch){
	return bindActionCreators({getCommits},dispatch);
}

export default connect(null,mapDistpatchToProps)(Commits);