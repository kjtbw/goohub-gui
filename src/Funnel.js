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
        this.replace_dsl_japanese = this.replace_dsl_japanese.bind(this);
        this.item_to_japanese = this.item_to_japanese.bind(this);
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

    item_to_japanese(item){
        switch (item){
        case "summary":
            return "予定名"
        case "dtstart":
            return "開始日時"
        case "dtend":
            return "終了日時"
        case "location":
            return "場所"
        case "description":
            return "説明"
        }
    }

    replace_dsl_japanese(dsl, tag){
        dsl = dsl.replace(/ /g, "")
        var dsl_array = dsl.split(":")
        switch (tag){
        case "filter":
            switch(dsl_array[0]){
            case "summary":
            case "location":
            case "description":
                return this.item_to_japanese(dsl_array[0]) + "に" + dsl_array[1] + "を含む"
            case "dtstart":
            case "dtend":
                // TODO: YYYY-MM-DD .. YYYY-MM-DD の場合
                switch(dsl_array[1]){
                case "after":
                    return this.item_to_japanese(dsl_array[0]) + "が" + dsl_array[2] + ":" + dsl_array[3] + "以降"
                case "before":
                    return this.item_to_japanese(dsl_array[0]) + "が" + dsl_array[2] + ":" + dsl_array[3] + "以前"
                }
                break;
            }
            break;
        case "action":
            switch(dsl_array[0]){
            case "hide":
                return this.item_to_japanese(dsl_array[1]) + "を隠す"
            case "replace":
                return this.item_to_japanese(dsl_array[1]) + "を「" + dsl_array[2] + "」に置換"
            }
            break;
        case "outlet":
            switch(dsl_array[0]){
            case "google_calendar":
                // ほんとはcalendar listを使いたいが，時間ないので直書きで置換
                // なぜかthis.props.calendarsがないときとあるときがある
                // const calendar_name = Object.keys(this.props.calendars).filter( (key) => {
                //     return this.props.calendars[key] == dsl_array[1]
                // });
                // dsl = dsl.replace(dsl_array[1],calendar_name)
                console.log(this.props.calendars)
                dsl = dsl.replace("google_calendar", "Google カレンダー")
                dsl = dsl.replace("m8m131libkfur4mktvcl72aano@group.calendar.google.com", "nomlab")
                dsl = dsl.replace("d8bjck0kunfsn90uabknaipleo@group.calendar.google.com", "会議室1A")
                return dsl
            case "mail":
                return dsl.replace("mail", "メール")
            case "slack":
                return dsl.replace("slack", "Slack")
            }
            break;
        }
    }


    render () {
        //        console.log(this.state.calendars)
        return (
            <Card>
              <Card.Body>
                <Card.Title>{this.props.rule.name}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">適用条件</Card.Subtitle>
                    <ol><ul>{this.props.rule.filter.condition}</ul>
                      <ul>{this.replace_dsl_japanese(this.props.rule.filter.condition, "filter")}</ul>

                    </ol>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">加工方法</Card.Subtitle>
                    <ol><ul>{this.props.rule.action.modifier}</ul>
                      <ul>{this.replace_dsl_japanese(this.props.rule.action.modifier, "action")}</ul>

                    </ol>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Subtitle className="mb-2 text-muted">共有先</Card.Subtitle>
                    <ol>
                      <ul>{this.replace_dsl_japanese(this.props.rule.outlet.informant, "outlet")}</ul>
                    </ol>
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
