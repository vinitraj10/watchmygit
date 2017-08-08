import React,{Component} from "react";
import {connect} from "react-redux";
import {Bar} from "react-chartjs-2";

class Graph extends Component{
	renderGraph(){
		const language = [];
		this.props.repo.repos.map((repo)=>{
			language.push(repo.language);
		});
		const data = {
			labels:language,
			datasets: [
				    {
				      label: 'My First dataset',
				      backgroundColor: 'rgba(255,99,132,0.2)',
				      borderColor: 'rgba(255,99,132,1)',
				      borderWidth: 1,
				      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				      hoverBorderColor: 'rgba(255,99,132,1)',
				      data: [1,2,3,4,5,6,7,8,9,10,11,12]
				    }
			 	]
			};
			
			return (
				<Bar data={data} width={100} height={50}/>
			);
		}
	
	render() {
		return(
			<div>{this.renderGraph()}</div>
		);
	}	
}

function mapStateToProps(state){
	return{
		git:state.git,
		repo:state.repo
	}
}

export default connect(mapStateToProps)(Graph);