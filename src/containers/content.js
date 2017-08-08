import React,{Component} from "react";
import {connect} from  "react-redux";
import Search from "../components/search";
import Loading from "../components/Loading";
import Detail from "../components/detail";
import Err from "../components/error";

class Content extends Component{

	render(){
		const isFetching = this.props.git.isFetching;
		const isFetched = this.props.git.isFetched;
		const error = this.props.git.error;
		const userDetail = this.props.git.user;
		return(
			<div className="container">
				{isFetching?(<Loading/>):(!isFetched?(error?(<Err msg={error}/>):<Search/>):(<Detail user={userDetail}/>))}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		git:state.git
	}
}
export default connect(mapStateToProps)(Content);