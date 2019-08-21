import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Toggle from 'react-toggle'
import ObjectList from './ObjectList';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Funnel extends Component {
    constructor() {
		super();
        this.handleSwitch = this.handleSwitch.bind(this);
        this.post_exec_funnel = this.post_exec_funnel.bind(this);
    }

    post_exec_funnel(exec_funnel){
        fetch("http://localhost:4567/info/exec_funnel", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(exec_funnel)
        })
    }

    handleSwitch(event){
        var exec_funnel = []
        if (event.target.checked) {
            this.props.info.exec_funnel.push(this.props.rule.name)
            var exec_funnel = this.props.info.exec_funnel.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            })
        } else {
            var exec_funnel = this.props.info.exec_funnel.filter(n => n !== this.props.rule.name);
        }
        this.post_exec_funnel(exec_funnel)
    }
    render () {
        return (
            <Card>
              <Card.Body>
                <Card.Title>{this.props.rule.name}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">適用条件</Card.Subtitle>
                    <ol><ul>{this.props.rule.filter.condition}</ul></ol>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">加工方法</Card.Subtitle>
                    <ol><ul>{this.props.rule.action.modifier}</ul></ol>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">共有先</Card.Subtitle>
                    <ol><ul>{this.props.rule.outlet.informant}</ul></ol>
                  </ListGroup.Item>
                </ListGroup>
                <Row>
                  <Col><Toggle defaultChecked={this.props.rule.status}
                               onChange={this.handleSwitch} /></Col>
                  <Col><Link to={"/settings/" + this.props.rule.name}><Button variant="outline-success">Settings</Button></Link></Col>
                </Row>
              </Card.Body>
            </Card>
        );
    }
}

export default Funnel;
