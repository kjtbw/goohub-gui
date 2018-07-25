import React, { Component } from 'react';
import PullDown from './PullDown';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button, Grid, Row, Col} from 'react-bootstrap';

class PageOfAction extends Component{
	constructor() {
		super();
        var opponents = [
            "",
            "Google Calendar",
            "Mail",
            "Slack"
        ];
		this.state = {
			address: "",
            opponents: opponents,
            opponent: opponents[0]

		};
		this.handleActionChange = this.handleActionChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleActionChange(event){
		this.setState({
			opponent: event.target.value
		});
	}

	handleAddressChange(event){
		this.setState({
			address: event.target.value
		});
    }

	handleSubmit(event){
        alert('アクションを作成しました\n' +
              '共有先: ' + this.state.opponent + '\n' +
              '引数: ' + this.state.address);
        this.setState(this.state);
        event.preventDefault();
    }

	render(){
		return(
			<div>
              <Grid>
                <h1>Action</h1>
                <br/>
			    共有先: <PullDown data = {this.state.opponents} handleChange = {this.handleActionChange}/>
			    <p/>
			    引数: <TextBox handleTextChange = {this.handleAddressChange}/>(例: メールアドレス，カレンダID)
			    <p/>

                <br/>
                <Button bsStyle="success" onClick = {this.handleSubmit}>アクションを作成</Button>
                <p/>

                <br/>
                <h4>
                  <Link to="/calendar">カレンダへ戻る</Link>&nbsp;
                </h4>
              </Grid>
			</div>
		);
	}
}

export default PageOfAction;
