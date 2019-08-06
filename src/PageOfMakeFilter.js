import React, { Component } from 'react';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';

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
            state: { name: this.props.location.state.name,
                     f_name: this.state.name,
                     filter_dsl: this.state.filter_dsl }
        });
    }

	render(){
		return(
			<div>
              <Container>
                <h1>Filter</h1>
                <h4>適用条件</h4>
                <br/>
                フィルタ名: <TextBox handleTextChange = {this.handleNameChange}/>
                <p/>
                予定名: <TextBox handleTextChange = {this.handleS}/>
                <p/>
                開始日時: <TextBox handleTextChange = {this.handleDS}/>
                <p/>
                終了日時: <TextBox handleTextChange = {this.handleDE}/>
                <p/>
                場所: <TextBox handleTextChange = {this.handleL}/>
                <p/>
                参加者: <TextBox handleTextChange = {this.handleA}/>
                <p/>
                説明: <TextBox handleTextChange = {this.handleD}/>

                <p/>
                ルール名: {this.props.location.state.name}
                <p/>

                <h4>
                  <Link to="/calendar/">
                    <Button>
                      カレンダへ戻る
                    </Button>
                  </Link>&nbsp;

                  <Button onClick={this.handleNext}>
                    アクションの設定へ
                  </Button>
                </h4>
              </Container>
			</div>
		);
	}
}

export default PageOfMakeFilter;
