import React, { Component } from 'react';
import TextBox from './TextBox';
import List from './List';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';

class PageOfMakeRuleName extends Component{
	constructor() {
		super();
		this.state = {
            name: ""
		};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
	}

    handleNameChange(event){this.setState({name: event.target.value});}
    handleNext(){
        this.props.history.push({
            pathname: "/make/filter",
            state: { name: this.state.name,
                   }, });}

	render(){
		return(
			<div>
              <Container>
                <h1>Rule Name</h1>
                作成するルール名: <TextBox handleTextChange = {this.handleNameChange}/>
                <p/>

                <h4>
                  <Link to="/calendar/">
                    <Button variant="outline-secondary">
                      カレンダへ戻る
                    </Button>
                  </Link>&nbsp;

                  <Button variant="outline-success" onClick={this.handleNext}>
                    適用条件の設定へ
                  </Button>
                </h4>
              </Container>
			</div>
		);
	}
}

export default PageOfMakeRuleName;
