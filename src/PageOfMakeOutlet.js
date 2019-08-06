import React, { Component } from 'react';
import PullDown from './PullDown';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';

class PageOfMakeOutlet extends Component{
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
        if((this.state.opponent === "Google Calendar") | (this.state.opponent === "Mail")){
            outlet_dsl = this.state.opponent + " : " + this.state.address}
        if(this.state.opponent === "Slack"){
            outlet_dsl = this.state.opponent
        }

        this.props.history.push({
            pathname: "/list",
            state: {name: this.props.location.state.name,
                    f_name: this.props.location.state.f_name,
                    filter_dsl: this.props.location.state.filter_dsl,
                    a_name: this.props.location.state.a_name,
                    action_dsl: this.props.location.state.action_dsl,
                    o_name: this.state.name,
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
                <h1>Outlet</h1>
                <h4>共有先</h4>
                アウトレット名: <TextBox handleTextChange = {this.handleNameChange}/>
                <p/>
                共有先: <PullDown data = {this.state.opponents} handleChange = {this.handleOpponentChange}/>
			    <p/>
			    引数: <TextBox handleTextChange = {this.handleAddressChange}/>(例: メールアドレス，カレンダID)
                <p/>
                ルール名: {this.props.location.state.name}
			    <br/>
                フィルタ名: {this.props.location.state.f_name}
                <br/>
                適用条件: {this.props.location.state.filter_dsl}
                <br/>
                アクション名: {this.props.location.state.a_name}
                <br/>
                編集方法: {this.props.location.state.action_dsl}
                <p/>

                <h4>
                  <Link to={"/calendar/"}>
                    <Button>
                      カレンダへ戻る
                    </Button>
                  </Link>&nbsp;

                  <Button onClick={this.handleBack}>
                    アクションの作成へ
                  </Button>

                  <Button onClick={this.handleNext}>
                    ルールの一覧へ
                  </Button>

                </h4>
              </Container>
			</div>
		);
	}
}

export default PageOfMakeOutlet;
