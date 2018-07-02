import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageOfCorrespondenceTable from './PageOfCorrespondenceTable';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
// 		<div>Component</div>,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 		<App name = "Eiji"/>, document.getElementById('root')
// );

ReactDOM.render(
	 	<PageOfCorrespondenceTable />, document.getElementById('root')

)

registerServiceWorker();
