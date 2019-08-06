// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// my modules
import Home from './Home';
import PageOfFilter from './PageOfFilter';
import PageOfAction from './PageOfAction';
import PageOfCalendar from './PageOfCalendar';
import MyNavbar from './MyNavbar';
import PageOfFunnelList from './PageOfFunnelList';
import PageOfMakeFilter from './PageOfMakeFilter';
import PageOfMakeAction from './PageOfMakeAction';
import PageOfMakeOutlet from './PageOfMakeOutlet';
import PageOfMakeRuleName from './PageOfMakeRuleName';


// css
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toggle/style.css"

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
          <Switch>
            <Route path="/list" component={PageOfFunnelList}/>
          </Switch>
          <Switch>
            <Route path="/make/rule_name" component={PageOfMakeRuleName}/>
            <Route path="/make/filter" component={PageOfMakeFilter}/>
            <Route path="/make/action" component={PageOfMakeAction}/>
            <Route path="/make/outlet" component={PageOfMakeOutlet}/>
          </Switch>

		</div>
	  </Router>
    </div>
)

ReactDOM.render(
    <App />, document.getElementById('root')
)

registerServiceWorker();
export default withRouter(App)
