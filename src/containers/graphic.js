import React,{Component} from "react";
import {getRepos} from "../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Graphic extends Component{
	componentDidMount() {
		console.log(this.props);
		const username = this.props.username;
		this.props.getRepos(username);
	}
	render(){
		return <pre>{this.props.username}</pre>
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