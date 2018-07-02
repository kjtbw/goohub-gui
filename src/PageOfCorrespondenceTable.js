import React, { Component } from 'react';
import ActionCollection from './ActionCollection';
import FilterCollection from './FilterCollection';
import PullDown from './PullDown';
import SubmitButton from './SubmitButton';

class PageOfCorrespondenceTable extends Component{
	constructor() {
		super();
		var fc = new FilterCollection();
		var ac = new ActionCollection();
		var f_names = fc.values("name");
		var a_names = ac.values("name");
		this.state = {
			f_names: f_names,
			a_names: a_names,
			f_name: f_names[0],
			a_name: a_names[0]
		};
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleActionChange = this.handleActionChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleFilterChange(event){
		this.setState({
			f_name: event.target.value
		});
	}

	handleActionChange(event){
		this.setState({
			a_name: event.target.value
		});
	}

	handleSubmit(event) {
        alert('CorrespondenceTable: \nfilter: ' + this.state.f_name + '\naction: ' + this.state.a_name);
        event.preventDefault();
    }

	render(){
		return(
			<div>
			  Filters
			  <br/>
			  <PullDown data = {this.state.f_names} handleChange = {this.handleFilterChange}/>
			  <p/>
			  Actions
			  <br/>
			  <PullDown data = {this.state.a_names} handleChange = {this.handleActionChange}/>
			  <br/>
			  <SubmitButton handleSubmit = {this.handleSubmit}/>
			  {/*
				  <br/>
					  CorrespondenceTable is {this.state.f_name}, {this.state.a_name}
				  */}
			</div>
		);
	}
}

export default PageOfCorrespondenceTable;
