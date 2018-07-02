import React, { Component } from 'react';
import ActionCollection from './ActionCollection';
import FilterCollection from './FilterCollection';
import PullDown from './PullDown';

class PageOfCorrespondenceTable extends Component{
	render(){
		var fc = new FilterCollection();
		var f_names = fc.values("name");
		var ac = new ActionCollection();
		var a_names = ac.values("name");

		return(
				<div>
				Filters
				<PullDown data = {f_names}/>
				Actions
				<PullDown data = {a_names}/>
				</div>
		);
	}
}

export default PageOfCorrespondenceTable;
