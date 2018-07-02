import React, { Component } from 'react';
import ActionCollection from './ActionCollection';
import FilterCollection from './FilterCollection';
import List from './List';

class PageOfCorrespondenceTable extends Component{
	render(){
		var fc = new FilterCollection();
		var ac = new ActionCollection();
		return(
				<div>
				Filters List
				<List data = {fc.collection}/>
				Actionss List
				<List data = {ac.collection}/>
				</div>
		);
	}
}

export default PageOfCorrespondenceTable;
