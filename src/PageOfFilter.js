import React, { Component } from 'react';
import PullDown from './PullDown';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button, Grid, Row, Col} from 'react-bootstrap';

class PageOfFilter extends Component{
	constructor() {
		super();
		var methods = [
            "",
            "含む",
            "置換する",
            "以前である",
            "以降である",
            "隠す"
        ];
		var columns = [
            "",
			"予定名",
			"開始日時",
			"終了日時",
			"場所",
			"参加者",
			"説明",
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
        alert('フィルタを作成しました\n' +
              '適用条件:\n'  +
              '\t項目: ' + this.state.condition_column + '\n' +
			  '\t引数: ' + this.state.condition_arg  + '\n' +
			  '\t処理: ' + this.state.condition_method + '\n' +
			  '編集方法:\n' +
              '\t項目: '+ this.state.modifier_column + '\n' +
			  '\t引数: ' + this.state.modifier_arg + '\n' +
			  '\t処理: ' + this.state.modifier_method
			 );
        this.setState(this.state);
        event.preventDefault();
    }

	render(){
		return(
			<div>
              <Grid>
                <h1>Filter</h1>
                <br/>
                <h4>適用条件</h4>
                項目: <PullDown data = {this.state.columns} handleChange = {this.handleCC}/>
                <br/>
                引数: <TextBox handleTextChange = {this.handleCA}/>(例: 会議，出張，17)
                <br/>
                処理: <PullDown data = {this.state.methods} handleChange = {this.handleCM}/>
			    <p/>

                <br/>
			    <h4>編集方法</h4>
			    項目: <PullDown data = {this.state.columns} handleChange = {this.handleMC}/>
                <br/>
			    引数: <TextBox handleTextChange = {this.handleMA}/>(例: 仕事，17)
                <br/>
                処理: <PullDown data = {this.state.methods} handleChange = {this.handleMM}/>
			    <p/>

                <br/>
                <Button bsStyle="success" onClick = {this.handleSubmit}>フィルタを作成</Button>
                <p/>

                <br/>
                <h4>
                  <Link to="/action">アクションを作成する</Link>&nbsp;
                </h4>
              </Grid>
			</div>
		);
	}
}

export default PageOfFilter;
