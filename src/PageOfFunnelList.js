import React, { Component } from 'react';
import ObjectList from './ObjectList';

class PageOfFunnelList extends Component{
	constructor() {
		super();
        var funnels = require('./db/funnels.json');
        var filters = require('./db/filters.json');
        var actions = require('./db/actions.json');
        var outlets = require('./db/outlets.json');

        var rule_list = [];
        for(let k in funnels){
            const filter = filters.find((filter) => {
                return (filter.name === funnels[k].filter_name);
            });
            const action = actions.find((action) => {
                return (action.name === funnels[k].action_name);
            });
            const outlet = outlets.find((outlet) => {
                return (outlet.name === funnels[k].outlet_name);
            });
            var rule = {
                name: funnels[k].name,
                filter: filter,
                action: action,
                outlet: outlet
            };
            rule_list.push(rule);
        }

		this.state = {
            // funnels: funnels,
            // filters: filters,
            // actions: actions,
            // outlets: outlets,
            rule_list: rule_list,
		};
	}

	render(){
		return(
			<div>
              {/* 案1の構成だと，既存のフィルタを管理する必要がないので，この辺の情報はいらない
              FunnelList
              <br/>
              <ArrayObjectList data = {this.state.funnels}/>
              FilterList
              <br/>
              <ArrayObjectList data = {this.state.filters}/>
              ActionList
              <br/>
              <ArrayObjectList data = {this.state.actions}/>
              OutletList
              <br/>
              <ArrayObjectList data = {this.state.outlets}/>
              */}
              RuleList
              <br/>
              <ol>
                {this.state.rule_list.map((rule) => (
                    <li>
                      {rule.name}:<br/>
                      filter:<ObjectList data = {rule.filter}/>
                      action:<ObjectList data = {rule.action}/>
                      outlet:<ObjectList data = {rule.outlet}/>
                    </li>
                ))}
            </ol>
			</div>
		);
	}
}

export default PageOfFunnelList;
