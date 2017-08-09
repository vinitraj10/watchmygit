import React,{Component} from "react";
import {connect} from "react-redux";
import {Bar} from "react-chartjs-2";
import CommitDetail from "./commitdetail";

class Graph extends Component{
	ArrangeLang(){
		const updatedlangSet=new Set();
		this.props.repo.repos.map((repo)=>{
			if(repo.language)
				updatedlangSet.add(repo.language);

		})
		//console.log(updatedlangSet);
		const updatedList = [...updatedlangSet];
		return updatedList;
	}
	getLangActivity(language){
		const temp =[];
		language.map((val)=>{
			let count=0;
			this.props.repo.repos.map((repo)=>{
				if(val===repo.language)
					count+=1;
			});
			temp.push(count);
		});
		return temp
	}
	renderGraph(){
		const language = this.ArrangeLang();
		//console.log(language);
		const language_activity = this.getLangActivity(language);
		//console.log(language_activity);
		const data = {
			labels:language,
			datasets: [
				    {
				      label: 'Repositories',
				      backgroundColor: 'rgba(58, 207, 118, 1)',
				      borderColor: 'rgba(58, 207, 118, 1)',
				      borderWidth: 1,
				      hoverBackgroundColor: 'rgba(62, 187, 112, 1)',
				      hoverBorderColor: 'rgba(62, 187, 112, 1)',
				      barThickness:50,
				      data: language_activity
				    }
			 	]
			};
			
			return (
				<div className="column col-12">
					<div className="columns">
						<Bar data = {data} height={500} width={200} options = {{maintainAspectRatio:false}}/>
					</div>
					<CommitDetail/>
				</div>
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