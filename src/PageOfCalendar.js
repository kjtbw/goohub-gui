import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
//import events from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Grid, Row, Col, Button} from 'react-bootstrap';

moment.locale('ja');
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class PageOfCalendar extends Component{
    constructor(){
        super();
        //        var raw_data = JSON.parse(JSON.stringify(data));
        //      console.log(raw_data)

        var data = require('your_json_data_path')
        var events = [];
        for(var i = 0; i < data.items.length; i++) {
            var e = data.items[i];
            console.log(e);
            e = {
                'title': e.summary,
                'start': new Date(e.start.date_time),
                'end': new Date(e.end.date_time),
                'tag': 'office'
            };
            events.push(e);
        }

        this.state = {
            filter:"",
            events: events
        };
    }
    render(){
        if (this.props.match.params.id == null){
            this.props.match.params.id = "undefined";
        }

        if (this.props.match.params.id.includes("undefined")){
            this.props.match.params.id = "なし";
        }
        //filter1なら，会議を仕事で置換
        // if (this.props.match.params.id.includes("会議を仕事で置換")){
        //     events.map(e =>{
        //         if(e["title"].includes("会議"))
        //             e["title"] = "仕事";
        //         //                e["desc"] = "";
        //     });
        //     this.state.filter = "(フィルタ: 会議を仕事で置換)";
        // }
        // filter3なら，出張を仕事で置換
        // if (this.props.match.params.id.includes("filter3")){
        //     events.map(e =>{
        //         if(e["title"].includes("出張"))
        //             e["title"] = "仕事";
        //     });
        // }
        // filter1なら，17時以降の予定を削除(nullにするので，一番最後)
        // if (this.props.match.params.id.includes("filter1")){
        //     events.map(e =>{
        //         if(e["start"].getHours() > 17){
        //             e["title"] = null;
        //             e["start"] = null;
        //             e["end"] = null;
        //         }
        //     });
        //}

        return(
            <div style={{height: 625}}>
              <Grid>
                <Row>
                  <Col xs={16} md={12}>
                    <h1>山本先生のカレンダ{this.state.filter}</h1>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6} md={4}>
                    <div align="left">
                      <h4>
                        <Link to="/filter">
                          <Button>
                            新しいフィルタを作成
                          </Button>
                        </Link>&nbsp;
                      </h4>
                    </div>
                  </Col>


                  <Col xs={6} md={4}>
                    <div align="left">
                      <h4>
                        <Link to={"/action/" + this.props.match.params.id}>
                          <Button>
                            新しいアクションを作成
                          </Button>
                        </Link>&nbsp;
                      </h4>
                    </div>
                  </Col>
                </Row>
              </Grid>
              <p/>
              <BigCalendar
                // if you want to set onclick event, use this code
                // selectable
                // onSelectEvent={event => alert(event.title)}
                events={this.state.events}
                step={60}
                views={allViews}
                defaultDate={new Date()}
                //            onSelectEvent={event =>alert("予定名: " + event.title + "\n" +
                //                                       "説明: " + event.desc)}
                eventPropGetter={
                    (event, start, end, isSelected) => {
                        if (event["tag"] == "lecture"){
                            let lecture = {
                                backgroundColor: "lightblue",
                                color: 'black',
                                borderRadius: "0px",
                                border: "none"
                            };
                            return {
                                className: "",
                                style: lecture
                            };
                        }else{
                            if (event["tag"] == "office"){
                                let office = {
                                    backgroundColor: "lightgreen",
                                    color: 'black',
                                    borderRadius: "0px",
                                    border: "none"
                                };
                                return {
                                    className: "",
                                    style: office
                                };
                            }else{
                                if (event["tag"] == "personal"){
                                    let personal = {
                                        backgroundColor: "lightpink",
                                        color: 'black',
                                        borderRadius: "0px",
                                        border: "none"
                                    };
                                    return {
                                        className: "",
                                        style: personal
                                    };
                                }else {
                                    let others = {
                                        backgroundColor: "lightgrey",
                                        color: 'black',
                                        borderRadius: "0px",
                                        border: "none"
                                    };
                                    return {
                                        className: "",
                                        style: others
                                    };
                                }
                            }
                        }
                    }
                }
                />
            </div>
        );
    }
}

export default PageOfCalendar;
