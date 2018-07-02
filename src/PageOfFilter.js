import React, { Component } from 'react';
import FilterCollection from './FilterCollection';
import PullDown from './PullDown';
import TextBox from './TextBox';
import SubmitButton from './SubmitButton';

class PageOfFilter extends Component{
	constructor() {
		super();
		var fc = new FilterCollection();
		var methods = fc.methods();
		var columns = [
			"summary",
			"dtstart",
			"dtend",
			"location",
			"attendee",
			"description",
			"rrule"
		];
		this.state = {
			methods: methods,
			condition_method: methods[0],
			columns: columns,
			condition_column: columns[0],
			condition_arg: "",
			modifier_method: methods[0],
			modifier_column: columns[0],
			modifier_arg: "",
		};
		this.handleCM = this.handleCM.bind(this);
		this.handleCC = this.handleCC.bind(this);
		this.handleCA = this.handleCA.bind(this);
		this.handleMM = this.handleMM.bind(this);
		this.handleMC = this.handleMC.bind(this);
		this.handleMA = this.handleMA.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleCM(event){this.setState({condition_method: event.target.value});}
	handleCC(event){this.setState({condition_column: event.target.value});}
	handleCA(event){this.setState({condition_arg: event.target.value});}
	handleMM(event){this.setState({modifier_method: event.target.value});}
	handleMC(event){this.setState({modifier_column: event.target.value});}
	handleMA(event){this.setState({modifier_arg: event.target.value});}

	handleSubmit(event) {
        alert('Filter: \ncondition_method: ' + this.state.condition_method +
			  '\ncondition_column: ' + this.state.condition_column +
			  '\ncondition_arg: ' + this.state.condition_arg +
			  '\nmodifier_method:' + this.state.modifier_method +
			  '\nmodifier_column: ' + this.state.modifier_column +
			  '\nmodifier_arg: ' + this.state.modifier_arg
			 );
        event.preventDefault();
    }

	render(){
		return(
			<div>
			  condition
			  <br/>
			  method
			  <br/>
			  <PullDown data = {this.state.methods} handleChange = {this.handleCM}/>
			  <br/>
			  column
			  <br/>
			  <PullDown data = {this.state.columns} handleChange = {this.handleCC}/>
			  <br/>
			  arg
			  <br/>
			  <TextBox handleTextChange = {this.handleCA}/>

			  <p/>
			  modifier
			  method
			  <br/>
			  <PullDown data = {this.state.methods} handleChange = {this.handleMM}/>
			  <br/>
			  column
			  <br/>
			  <PullDown data = {this.state.columns} handleChange = {this.handleMC}/>
			  <br/>
			  arg
			  <br/>
			  <TextBox handleTextChange = {this.handleMA}/>

			  <p/>
			  <SubmitButton handleSubmit = {this.handleSubmit}/>
			</div>
		);
	}
}

export default PageOfFilter;
