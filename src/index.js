// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// my modules
import Home from './Home';
import PageOfFilter from './PageOfFilter';
import PageOfAction from './PageOfAction';
import PageOfCalendar from './PageOfCalendar';
import MyNavbar from './MyNavbar';
// css
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const App = () => (
   	<div>
	  <Router>
		<div>
          <MyNavbar/>
		  <Route path="/" component={Home}/>
		  <Route path="/filter" component={PageOfFilter}/>
          <Route path="/calendar" component={PageOfCalendar}/>
          <Route path="/action" component={PageOfAction}/>
		</div>
	  </Router>
    </div>
)

ReactDOM.render(
    <App />, document.getElementById('root')
)

registerServiceWorker();
