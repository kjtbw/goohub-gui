import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

moment.locale('ja');
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class PageOfCalendar extends Component{
    render(){
        // filter1なら，会議を仕事で置換
        if (this.props.match.params.id){
            if (this.props.match.params.id.includes("filter1"))
                events.map(e =>{
                    if(e["title"].includes("会議"))
                        e["title"] = "仕事";
                });
        };

		return(
            <div style={{height: 625}}>
              <Grid>
                <Row>
                  <Col xs={12} md={8}>
                    <h1>Calendar</h1>
                  </Col>
                  <br/>
                  <Col xs={6} md={4}>
                    <div align="right">
                      <h4>
                        <Link to="/filter">新しいフィルタを作成</Link>&nbsp;
                      </h4>
                    </div>
                  </Col>
                </Row>
              </Grid>
              <p/>

              <BigCalendar
                events={events}
                step={60}
                views={allViews}
                defaultDate={new Date(2018, 7, 24)}
                />
            </div>
        );
    }
}

export default PageOfCalendar;
