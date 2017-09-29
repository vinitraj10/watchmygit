import React,{Component} from 'react'
import CircularProgressbar from 'react-circular-progressbar';

class Result extends Component{
	render(){
		const {isFetching,isFetched,data} =this.props.data;
		if(isFetching){
			return (
				<div className="container">
					<div className="columns">
						<div className ="column col-3"></div>
						<div className = "column col-6">
							<div className = "loading loading-lg"></div>
						</div>
					</div>
				</div>
			);
		}
		else if(isFetched && data){
			const {count} = data;
			let percentage=0;
			if (count == 0)
				percentage=0;
			else if (count>=1 && count <=4)
				percentage = (count/4)*100;
			
			else
				percentage = 100;
			return (
					<div className="columns">
						<div className="column col-2">
							<div className="card">
							  <div className="card-image">
							    <img src={data.avatar} className="img-responsive"/>
							  </div>
							  <div className="card-header">
							    <h4 className="card-title">{data.login}</h4>
							  </div>
							</div>
						</div>
						<div className = "column col-10 hck-result">
							<div className = "columns">
								<div className = "column col-8">
									<h4 className="text-center hckHeader">{data.result}</h4>
								</div>
								<div className = "column col-2">
									<CircularProgressbar 
							            percentage={percentage}  
						                textForPercentage={(percentage) => `${(percentage*4)/100}/4`}
							        />
								</div>
								<div className = "column col-2"></div>
							</div>
						</div>	
					</div>
						
				);
		}
		return <h1></h1>
	}
}

export default Result;