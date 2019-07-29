import React, { Component } from 'react';
import PullDown from './PullDown';
import TextBox from './TextBox';
import { BrowserRouter as Link } from 'react-router-dom';
import {Button, Grid} from 'react-bootstrap';

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
        this.handleOpponentChange = this.handleOpponentChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
	}

    handleNext(){
        if((this.state.opponent === "Google Calendar") | (this.state.opponent === "Mail")){
            this.setState({outlet_dsl: this.state.opponent + " : " + this.state.address});}
        if(this.state.opponent === "Slack"){
            this.setState({outlet_dsl: this.state.opponent});}

        this.props.history.push({
            pathname: "/list",
            state: {f_name: this.props.location.state.f_name,
                    filter_dsl: this.props.location.state.filter_dsl,
                    a_name: this.props.location.state.f_name,
                    action_dsl: this.props.location.state.action_dsl,
                    o_name: this.state.name,
                    outlet_dsl: this.state.outlet_dsl
                   },});}

    handleNameChange(event){this.setState({name: event.target.value});}
    handleOpponentChange(event){this.setState({opponent: event.target.value});}
	handleAddressChange(event){this.setState({address: event.target.value});}

	render(){
		return(
			<div>
              <Grid>
                <h1>Outlet</h1>
                <br/>
                フィルタ名: {this.props.location.state.f_name}
                <p/>
                適用条件: {this.props.location.state.filter_dsl}
                <p/>
                アクション名: {this.props.location.state.a_name}
                <p/>
                編集方法: {this.props.location.state.action_dsl}

                <h4>共有先</h4>
                アウトレット名: <TextBox handleTextChange = {this.handleNameChange}/>
                <p/>
                共有先: <PullDown data = {this.state.opponents} handleChange = {this.handleOpponentChange}/>
			    <p/>
			    引数: <TextBox handleTextChange = {this.handleAddressChange}/>(例: メールアドレス，カレンダID)
			    <p/>

                <h4>
                  <Link to="/calendar/">
                    <Button>
                      カレンダへ戻る
                    </Button>
                  </Link>&nbsp;

                  <Link to={"/make/action/"}>
                    <Button>
                      アクションの作成へ
                    </Button>
                  </Link>&nbsp;

                  <button onClick={this.handleNext}> ルールの一覧へ</button>
                </h4>
              </Grid>
			</div>
		);
	}
}

export default PageOfMakeOutlet;
