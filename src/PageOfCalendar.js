import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class PageOfCalendar extends Component{
    render(){
		return(
            <div style={{ height: 700 }}>
              <Link to="/filter">フィルタを作る</Link>&nbsp;
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
