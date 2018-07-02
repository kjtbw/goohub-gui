import React, { Component } from 'react';
import FilterCollection from './FilterCollection';
import List from './List';

class PageOfCorrespondenceTable extends Component{
	render(){
		var fc = new FilterCollection();
		return(
				<div>
				Filters List
				<List data = {fc.filter_collection}/>
				</div>
		);
	}
}

export default PageOfCorrespondenceTable;
