import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './Home';
import PageOfFilter from './PageOfFilter';
import PageOfAction from './PageOfAction';
import PageOfCorrespondenceTable from './PageOfCorrespondenceTable';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
	<div>
	  <Router>
		<div>
		  <Link to="/">Home</Link>&nbsp;
		  <Link to="/filter">Filter</Link>&nbsp;
          <Link to="/action">Action</Link>&nbsp;
          <Link to="/correspondenceTable">CorrespondenceTable</Link>&nbsp;

		  <Route path="/" component={Home}/>
		  <Route path="/filter" component={PageOfFilter}/>
          <Route path="/action" component={PageOfAction}/>
		  <Route path="/correspondenceTable" component={PageOfCorrespondenceTable}/>
		</div>
	  </Router>
	</div>
)

ReactDOM.render(
		<App />, document.getElementById('root')
)

registerServiceWorker();
