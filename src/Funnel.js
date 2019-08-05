import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Toggle from 'react-toggle'
import ObjectList from './ObjectList';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Funnel extends Component {
    render () {
        console.log(this.props)
        return (
            <Card style={{ width: '25rem' }}>
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
                  <Col><Card.Link href="#">Settings</Card.Link></Col>
                </Row>
              </Card.Body>
            </Card>
        );
    }
}

export default Funnel;
