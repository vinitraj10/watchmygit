import React,{Component} from "react";
import {getRepos} from "../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Graph from "./graph.js";

class Graphic extends Component{
	componentDidMount() {
		console.log(this.props);
		const username = this.props.username;
		this.props.getRepos(username);
	}
	render(){
		const isFetching = this.props.repo.isFetching;
		const isFetched = this.props.repo.isFetched;
		return(
			<div className="column col-10">
				{isFetching?(<div className="loading"/>):(isFetched?(<Graph/>):(<h1>No Data</h1>))}
			</div>
		);
	}

}

function mapStateToProps(state){
	return {
		git:state.git,
		repo:state.repo
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getRepos},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Graphic);