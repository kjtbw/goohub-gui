import React, { Component } from 'react';
import ObjectList from './ObjectList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Funnel from './Funnel';
import CardColumns from 'react-bootstrap/CardColumns'

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
        if (this.props.location.state){
            var rule = {
                name: this.props.location.state.f_name,
                filter: {
                    name: this.props.location.state.f_name,
                    modifier: this.props.location.state.filter_dsl
                },
                action: {
                    name: this.props.location.state.a_name,
                    condition: this.props.location.state.action_dsl
                },
                outlet: {
                    name: this.props.location.state.o_name,
                    informant: this.props.location.state.outlet_dsl
                }
            };
        }
	    return(
		    <div>
              <h1>RuleList</h1>
              <p/>
              <CardColumns>
                {rule && <Funnel rule={rule}/>}
                {this.state.rule_list.map((rule,i) => (<Funnel rule={rule}/>))}
            </CardColumns>
                <Link to="/calendar/">
                <Button>
                カレンダへ戻る
            </Button>
                </Link>&nbsp;
		    </div>
	    );
    }
}

export default PageOfFunnelList;
