// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
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

// Switchは前から検索するため，条件がきびしいものを先にかくこと
const App = () => (
   	<div>
	  <Router>
		<div>
          <MyNavbar/>
		  <Route path="/" component={Home}/>
		  <Route path="/filter" component={PageOfFilter}/>
          <Switch>
            <Route path="/calendar/:id" component={PageOfCalendar}/>
            <Route path="/calendar" component={PageOfCalendar}/>
          </Switch>
          <Switch>
            <Route path="/action/:id" component={PageOfAction}/>
            <Route path="/action" component={PageOfAction}/>
          </Switch>
		</div>
	  </Router>
    </div>
)

ReactDOM.render(
    <App />, document.getElementById('root')
)

registerServiceWorker();
