import React, { Component } from 'react';
import ActionCollection from './ActionCollection';
import PullDown from './PullDown';
import TextBox from './TextBox';
import SubmitButton from './SubmitButton';

class PageOfAction extends Component{
	constructor() {
		super();
		var ac = new ActionCollection();
		var a_names = ac.values("name");
		this.state = {
			address: "",
			a_names: a_names,
			opponent: a_names[0]
		};
		this.handleActionChange = this.handleActionChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleActionChange(event){
		this.setState({
			opponent: event.target.value
		});
	}

	handleTextChange(event){
		this.setState({
			address: event.target.value
		});
	}

	handleSubmit(event) {
        alert('Action: \nopponent: ' + this.state.opponent + '\naddress: ' + this.state.address);
        event.preventDefault();
    }

	render(){
		return(
			<div>
			  opponent
			  <br/>
			  <PullDown data = {this.state.a_names} handleChange = {this.handleActionChange}/>
			  <p/>
			  address
			  <TextBox handleTextChange = {this.handleTextChange}/>
			  <p/>
			  <SubmitButton handleSubmit = {this.handleSubmit}/>
			</div>
		);
	}
}

export default PageOfAction;
