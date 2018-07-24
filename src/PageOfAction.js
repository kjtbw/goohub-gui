import React, { Component } from 'react';
import ActionCollection from './ActionCollection';
import PullDown from './PullDown';
import TextBox from './TextBox';
import SubmitButton from './SubmitButton';
import List from './List';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PageOfAction extends Component{
	constructor() {
		super();
		var ac = new ActionCollection();
		var a_names = ac.values("name");
        var opponents = ac.values("opponent");
		this.state = {
//            ac: ac,
            name: "",
			address: "",
 			a_names: a_names,
			opponent: a_names[0],
            opponents: opponents
		};
		this.handleActionChange = this.handleActionChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleActionChange(event){
		this.setState({
			opponent: event.target.value
		});
	}

	handleNameChange(event){
		this.setState({
			name: event.target.value
		});
	}

	handleAddressChange(event){
		this.setState({
			address: event.target.value
		});
    }


	handleSubmit(event){
        // var action = [{"id": this.state.a_names.length,
		// 		       "name":this.state.name,
        //                "converter":this.state.ac.get_converter(this.state.name),
		// 		       "informant":this.state.ac.get_informant(this.state.name)}];
        alert('Action:\nname:'+ this.state.name +  ' \nopponent: ' + this.state.opponent + '\naddress: ' + this.state.address);
        //        this.state.ac.add(action);
        this.state.a_names.push(this.state.name);
        this.setState(this.state);
        event.preventDefault();
    }

	render(){
		return(
			<div>
              name
              <TextBox handleTextChange = {this.handleNameChange}/>
              <p/>
			  opponent
			  <br/>
			  <PullDown data = {this.state.opponents} handleChange = {this.handleActionChange}/>
			  <p/>
			  address
			  <TextBox handleTextChange = {this.handleAddressChange}/>
			  <p/>
			  <SubmitButton handleSubmit = {this.handleSubmit}/>
              <p/>
              actions
              <br/>
              <List data = {this.state.a_names}/>
              <Link to="/calendar">カレンダへ戻る</Link>&nbsp;
			</div>
		);
	}
}

export default PageOfAction;
