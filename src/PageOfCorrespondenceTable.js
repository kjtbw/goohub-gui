import React, { Component } from 'react';
import ActionCollection from './ActionCollection';
import FilterCollection from './FilterCollection';
import PullDown from './PullDown';
import SubmitButton from './SubmitButton';
import List from './List';
import TextBox from './TextBox';

class PageOfCorrespondenceTable extends Component{
	constructor() {
		super();
		var fc = new FilterCollection();
		var ac = new ActionCollection();
		var f_names = fc.values("name");
		var a_names = ac.values("name");
		this.state = {
            name: "",
            calendar_id: "",
            ct_names: [],
			f_names: f_names.concat(["filter1", "filter2", "filter3"]),
			a_names: a_names.concat(["action1","action2"]),
			f_name: f_names[0],
			a_name: a_names[0]
		};
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleActionChange = this.handleActionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCIDChange = this.handleCIDChange.bind(this);
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

	handleNameChange(event){
		this.setState({
			name: event.target.value
		});
	}

	handleCIDChange(event){
		this.setState({
			calendar_id: event.target.value
		});
	}

	handleSubmit(event) {
        alert('CorrespondenceTable: \nname: ' + this.state.name +
              '\ncalendar id: ' + this.state.calendar_id +
              '\nfilter: ' + this.state.f_name +
              '\naction: ' + this.state.a_name);
        this.state.ct_names.push(this.state.name);
        this.setState(this.state);
        event.preventDefault();
    }

	render(){
		return(
			<div>
              Name
              <TextBox handleTextChange = {this.handleNameChange}/>
              <p/>

              Calendar ID
              <TextBox handleTextChange = {this.handleCIDChange}/>
              <p/>

			  Filters
			  <br/>
			  <PullDown data = {this.state.f_names} handleChange = {this.handleFilterChange}/>
			  <p/>
			  Actions
			  <br/>
			  <PullDown data = {this.state.a_names} handleChange = {this.handleActionChange}/>
			  <br/>
			  <SubmitButton handleSubmit = {this.handleSubmit}/>
              <p/>
              CorrespondenceTables
              <br/>
              <List data = {this.state.ct_names}/>
			</div>
		);
	}
}

export default PageOfCorrespondenceTable;
