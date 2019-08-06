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
    render () {
        return (
            <Card>
              <Card.Body>
                <Card.Title>{this.props.rule.name}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">Filter</Card.Subtitle>
                    <ObjectList data = {this.props.rule.filter}/>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">Action</Card.Subtitle>
                    <ObjectList data = {this.props.rule.action}/>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">Outlet</Card.Subtitle>
                    <ObjectList data = {this.props.rule.outlet}/>
                  </ListGroup.Item>
                </ListGroup>
                <Row>
                  <Col><Toggle onChange={this.handleSwitch} /></Col>
                  <Col><Link to={"/settings/" + this.props.rule.name}><Button>Settings</Button></Link></Col>
                </Row>
              </Card.Body>
            </Card>
        );
    }
}

export default Funnel;
