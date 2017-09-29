import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getCommits} from "../actions/gitwatcher";
import Commit from "./commit";

class Commits extends Component{
	componentDidMount() {
		const username = this.props.username;
		this.props.getCommits(username);
	}
	render(){
		const isFetching = this.props.commits.isFetching;
		const isFetched = this.props.commits.isFetched;
		return(
			<div className="container">
				{isFetching?(<div className="loading"></div>):(isFetched?(<Commit/>):(<h1>No data yet</h1>))}
			</div>	
		);	
	}
}

function mapDistpatchToProps(dispatch){
	return bindActionCreators({getCommits},dispatch);
}

export default connect(null,mapDistpatchToProps)(Commits);