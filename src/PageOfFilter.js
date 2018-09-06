import React, { Component } from 'react';
import PullDown from './PullDown';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import List from './List';

class PageOfFilter extends Component{
	constructor() {
		super();
		var condition_string_methods = [
            "",
            "含む",
            "一致する"
        ];
        var condition_date_methods = [
            "",
            "以前である",
            "以降である"
        ];
		var modifier_string_methods = [
             "",
            "隠す",
            "置換する"
        ];
		var modifier_date_methods = [
            "",
            "隠す",
        ];

		this.state = {
            name: "",
            f_names: [],
			condition_string_methods: condition_string_methods,
            condition_date_methods: condition_date_methods,
			modifier_string_methods:modifier_string_methods,
			modifier_date_methods: modifier_date_methods,
			condition_arg: "",
			modifier_arg: "",
		};
		this.handleCM = this.handleCM.bind(this);
		this.handleCA = this.handleCA.bind(this);
		this.handleMM = this.handleMM.bind(this);
		this.handleMA = this.handleMA.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleCM(event){this.setState({condition_method: event.target.value});}
	handleCA(event){this.setState({condition_arg: event.target.value});}
	handleMM(event){this.setState({modifier_method: event.target.value});}
	handleMA(event){this.setState({modifier_arg: event.target.value});}

    handleNameChange(event){
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(event) {
        // alert('フィルタを作成しました\n' +
              // 'フィルタ名: ' + this.state.name + '\n' +
              // '適用条件:\n'  +
              // '\t項目: ' + this.state.condition_column + '\n' +
			  // '\t引数: ' + this.state.condition_arg  + '\n' +
			  // '\t処理: ' + this.state.condition_method + '\n' +
			  // '編集方法:\n' +
              // '\t項目: '+ this.state.modifier_column + '\n' +
			  // '\t引数: ' + this.state.modifier_arg + '\n' +
			  // '\t処理: ' + this.state.modifier_method
		// );
        alert('フィルタを作成しました');
        this.state.f_names.push(this.state.name);
        this.setState(this.state);
        event.preventDefault();
    }

	render(){
		return(
			<div>
              <Grid>
                <h1>Filter</h1>
                <br/>
                フィルタ名: <TextBox handleTextChange = {this.handleNameChange}/>
                <p/>

                <br/>
                <h4>適用条件</h4>
                <Row>
                  <Col xs={3} md={2}>
                    項目: 予定名
                    <br/>
                    引数: <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    処理: <PullDown data = {this.state.condition_string_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    開始日時
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_date_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    終了日時
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_date_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    場所
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_string_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    参加者
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_string_methods} handleChange = {this.handleCM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    説明
                    <br/>
                    <TextBox handleTextChange = {this.handleCA}/>
                    <br/>
                    <PullDown data = {this.state.condition_string_methods} handleChange = {this.handleCM}/>
                  </Col>
                </Row>
                <p/>

                <br/>
			    <h4>編集方法</h4>
                <Row>
                  <Col xs={3} md={2}>
                    項目: 予定名
                    <br/>
                    引数: <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    処理: <PullDown data = {this.state.modifier_string_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    開始日時
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_date_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    終了日時
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_date_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    場所
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_string_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    参加者
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_string_methods} handleChange = {this.handleMM}/>
                  </Col>
                  <Col xs={3} md={2}>
                    説明
                    <br/>
                    <TextBox handleTextChange = {this.handleMA}/>
                    <br/>
                    <PullDown data = {this.state.modifier_string_methods} handleChange = {this.handleMM}/>
                  </Col>
                </Row>
			    <p/>

                <br/>
                <Button bsStyle="success" onClick = {this.handleSubmit}>フィルタを作成</Button>
                <p/>

                <br/>
                <h4>作成したフィルタ</h4>
                <br/>
                <List data = {this.state.f_names}/>

                <br/>
                <h4>
                  <Link to={"/action/" + this.state.f_names}>
                    <Button>
                      アクションを作成する
                    </Button>
                  </Link>&nbsp;
                </h4>
              </Grid>
			</div>
		);
	}
}

export default PageOfFilter;
