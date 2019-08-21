import React, { Component } from 'react';
import TextBox from './TextBox';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';

class PageOfMakeAction extends Component{
	constructor() {
		super();
		this.state = {
            name: "",
            action_dsl: "",
		};
        this.handleNameChange = this.handleNameChange.bind(this);
		this.handleM = this.handleM.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

    handleNameChange(event){this.setState({name: event.target.value});}
	handleM(event){this.setState({action_dsl: event.target.value});}

    handleNext(){
        this.props.history.push({
            pathname: "/make/outlet",
            state: { name: this.props.location.state.name,
                     f_name: this.props.location.state.f_name,
                     filter_dsl: this.props.location.state.filter_dsl,
                     a_name: "fit2019",
                     action_dsl: this.state.action_dsl
                   }, });}

	render(){
		return(
			<div>
              <Container>
                <h1>加工方法</h1>
                <br/>
                加工方法: <TextBox handleTextChange = {this.handleM}/>
                <p/>
                ルール名: {this.props.location.state.name}
                <br/>
                適用条件: {this.props.location.state.filter_dsl}
                <p/>

                <h4>
                  <Link to="/calendar/">
                    <Button variant="outline-secondary">
                      カレンダへ戻る
                    </Button >
                  </Link>&nbsp;

                  <Link to="/make/filter/">
                    <Button variant="outline-secondary">
                      適用条件の設定へ戻る
                    </Button>
                  </Link>&nbsp;

                  <Button variant="outline-success" onClick={this.handleNext}>
                    共有先の設定へ
                  </Button>
                </h4>
              </Container>
			</div>
		);
	}
}

export default PageOfMakeAction;
