import React, { Component } from 'react';
import PullDown from './PullDown';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'

class PageOfMakeOutlet extends Component{
	constructor() {
		super();
        var opponents = [
            "",
            "Google カレンダー",
            "メール",
            "Slack"
        ];
		this.state = {
            address: "",
            opponents: opponents,
            opponent: opponents[0],
            name: "",
            f_names: [],
            outlet_dsl: "",
		};
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleOpponentChange = this.handleOpponentChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
	}

    handleNext(){
        var outlet_dsl = "";
        if(this.state.opponent === "Google カレンダー"){
            outlet_dsl = "google_calendar : " + this.state.address}
        if(this.state.opponent === "メール"){
            outlet_dsl = "mail : " + this.state.address
        }
        if(this.state.opponent === "Slack"){
            outlet_dsl = "slack"
        }

        this.props.history.push({
            pathname: "/list",
            state: {name: this.props.location.state.name,
                    f_name: this.props.location.state.f_name,
                    filter_dsl: this.props.location.state.filter_dsl,
                    a_name: this.props.location.state.a_name,
                    action_dsl: this.props.location.state.action_dsl,
                    o_name: "fit2019",
                    outlet_dsl: outlet_dsl
                   },});}

    handleBack(){
        this.props.history.push({
            pathname: "/make/action",
            state: {name: this.props.location.state.name,
                    f_name: this.props.location.state.f_name,
                    filter_dsl: this.props.location.state.filter_dsl,
                    a_name: this.props.location.state.f_name,
                    action_dsl: this.props.location.state.action_dsl,
                   },});}


    handleNameChange(event){this.setState({name: event.target.value});}
    handleOpponentChange(event){this.setState({opponent: event.target.value});}
	handleAddressChange(event){this.setState({address: event.target.value});}

	render(){
		return(
			<div>
              <Container>
                <h1>共有先</h1>
                <p/>
                共有先: <PullDown data = {this.state.opponents} handleChange = {this.handleOpponentChange}/>
			    <p/>
			    引数: <Form.Control placeholder="family@gmail.com" onChange = {this.handleAddressChange}/>(例: メールアドレス，カレンダID)
                <p/>
                ルール名: {this.props.location.state.name}
			    <br/>
                適用条件: {this.props.location.state.filter_dsl}
                <br/>
                加工方法: {this.props.location.state.action_dsl}
                <p/>

                <h4>
                  <Link to={"/calendar/"}>
                    <Button variant="outline-secondary">
                      カレンダへ戻る
                    </Button>
                  </Link>&nbsp;

                  <Button variant="outline-secondary" onClick={this.handleBack}>
                    加工方法の設定へ戻る
                  </Button>

                  <Button variant="outline-success" onClick={this.handleNext}>
                    ルールを作成
                  </Button>

                </h4>
              </Container>
			</div>
		);
	}
}

export default PageOfMakeOutlet;
