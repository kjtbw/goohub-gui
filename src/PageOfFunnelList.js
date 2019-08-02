import React, { Component } from 'react';
import ObjectList from './ObjectList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button, Grid} from 'react-bootstrap';

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


        // this.state = {
        //     funnels: "",
        //     filters: "",
        //     actions: "",
        //     outlets: "",
        //     rule_list: [],
        // };
    }

    // json-serverから読む処理
    //     componentDidMount(){
    //         //var funnels = "";
    //         fetch("http://localhost:4000/funnels")
    //             .then( response => response.json() )
    //             .then( json =>  {this.setState({ funnels: json });
    //                             });
    //         fetch("http://localhost:4000/filters")
    //             .then( response => response.json() )
    //             .then( json =>  {this.setState({ filters: json });
    //                             });
    //         fetch("http://localhost:4000/actions")
    //             .then( response => response.json() )
    //             .then( json =>  {this.setState({ actions: json });
    //                             });
    //         // データの取得には，数~数十msecかかるので，取得処理の最後に処理を書く，この外に書くと，データ取得前に処理を実行しようとするので，""を処理しようとする
    //         fetch("http://localhost:4000/outlets")
    // q            .then( response => response.json() )
    //             .then( json =>  {this.setState({ outlets: json });
    //                              console.log(this.state.funnels);
    //                              var rule_list = [];
    //                              for(let k in this.state.funnels){
    //                                  const filter = this.state.filters.find((filter) => {
    //                                      return (filter.name === this.state.funnels[k].filter_name);
    //                                  });
    //                                  const action = this.state.actions.find((action) => {
    //                                      return (action.name === this.state.funnels[k].action_name);
    //                                  });
    //                                  const outlet = this.state.outlets.find((outlet) => {
    //                                      return (outlet.name === this.state.funnels[k].outlet_name);
    //                                  });
    //                                  var rule = {
    //                                      name: this.state.funnels[k].name,
    //                                      filter: filter,
    //                                      action: action,
    //                                      outlet: outlet
    //                                  };
    //                                  rule_list.push(rule);
    //                              }
    //                              this.setState({rule_list: rule_list});
    //                             });

    //         fetch("http://localhost:4000/funnels", {
    //             method: "POST",
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ id: 2,
    //                                    name: "testtest"})
    //         })
    //     }

    render(){
	    return(
		    <div>
              <Grid>
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
                                                Your Rule
                                                <p/>
                                                filter: {this.props.location.state.filter_dsl}<br/>
                                                action: {this.props.location.state.action_dsl}<br/>
                                                outlet: {this.props.location.state.outlet_dsl}
                                                <p/>

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
                <Link to="/calendar/">
                <Button>
                カレンダへ戻る
            </Button>
                </Link>&nbsp;
            </Grid>
			    </div>
	    );
    }
}

export default PageOfFunnelList;
