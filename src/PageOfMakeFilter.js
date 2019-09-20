import React, { Component } from 'react';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'

class PageOfMakeFilter extends Component{
	constructor() {
		super();
		this.state = {
            name: "",
            filter_dsl: "",
		};
		this.handleS = this.handleS.bind(this);
		this.handleDS= this.handleDS.bind(this);
		this.handleDE = this.handleDE.bind(this);
		this.handleL = this.handleL.bind(this);
        this.handleA = this.handleA.bind(this);
		this.handleD = this.handleD.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
	}

    handleNameChange(event){this.setState({name: event.target.value});}
	handleS(event){this.setState({filter_dsl: "summary:" + event.target.value});}
    handleDS(event){this.setState({filter_dsl: "dtstart:" + event.target.value});}
	handleDE(event){this.setState({filter_dsl: "dtend:" + event.target.value});}
	handleL(event){this.setState({filter_dsl: "location:" + event.target.value});}
	handleA(event){this.setState({filter_dsl: "atendee:" + event.target.value});}
    handleD(event){this.setState({filter_dsl: "description:" + event.target.value});}

    handleNext(){
        this.props.history.push({
            pathname: "/make/action",
            state: { name: this.state.name,
                     f_name: this.state.name,
                     filter_dsl: this.state.filter_dsl }
        });
    }

	render(){
		return(
			<div>
              <Container>
                <h1>ルールの作成</h1>
                ルール名: <Form.Control placeholder="就活の予定の詳細を隠して研究室のカレンダに共有" onChange = {this.handleNameChange}/>
                <p/>
                <h3>適用条件</h3>
                <p/>
                予定名: <Form.Control placeholder="就活，打合せ & 学会, !講義" onChange = {this.handleS}/>
                <p/>
                開始日時: <Form.Control placeholder="after : 17:00, before : 12:00, 2019-8-1 .. 2019-8-31" onChange = {this.handleDS}/>
                <p/>
                終了日時: <Form.Control placeholder="after : 17:00, before : 12:00, 2019-8-1 .. 2019-8-31" onChange = {this.handleDE}/>
                <p/>
                場所: <Form.Control placeholder="103号室，104号室 | 201号室, !11講義室" onChange = {this.handleL}/>
                <p/>
                説明: <Form.Control placeholder="交通費，資料 | 議事録，!先生" onChange = {this.handleD}/>
                <p/>
                <h4>
                  <Link to="/calendar/">
                    <Button variant="outline-secondary">
                      カレンダへ戻る
                    </Button>
                  </Link>&nbsp;

                  <Button variant="outline-success" onClick={this.handleNext}>
                    加工方法の設定へ
                  </Button>
                </h4>
              </Container>
			</div>
		);
	}
}

export default PageOfMakeFilter;
