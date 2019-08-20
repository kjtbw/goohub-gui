import React, { Component } from 'react';
import ObjectList from './ObjectList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Funnel from './Funnel';
import CardColumns from 'react-bootstrap/CardColumns'

class PageOfFunnelList extends Component{
	constructor() {
		super();
        var rule_list = [];
        this.state = {
            rule_list: rule_list,
        };
    }

    // json-serverから読む処理
    componentDidMount(){
        //var funnels = "";
        fetch( "http://localhost:4567/info/")
            .then( response => response.json() )
            .then( json =>  {this.setState({ info: json });
                            });
        fetch( "http://localhost:4567/funnels/")
            .then( response => response.json() )
            .then( json =>  {this.setState({ funnels: json });
                            });
        fetch("http://localhost:4567/filters/")
            .then( response => response.json() )
            .then( json =>  {this.setState({ filters: json });
                            });
        fetch("http://localhost:4567/actions/")
            .then( response => response.json() )
            .then( json =>  {this.setState({ actions: json });
                            });

        // sleep処理
        const d1 = new Date();
        while (true) {
            const d2 = new Date();
            if (d2 - d1 > 100) {
                break;
            }
        }

        // データの取得には，数~数十msecかかるので，取得処理の最後に処理を書く，この外に書くと，データ取得前に処理を実行しようとするので，""を処理しようとする
        fetch("http://localhost:4567/outlets/")
            .then( response => response.json() )
            .then( json =>  {this.setState({ outlets: json });
                             var rule_list = [];
                             for(let k in this.state.funnels){
                                 const filter = this.state.filters.find((filter) => {
                                     return (filter.name === this.state.funnels[k].filter_name);
                                 });
                                 const action = this.state.actions.find((action) => {
                                     return (action.name === this.state.funnels[k].action_name);
                                 });
                                 const outlet = this.state.outlets.find((outlet) => {
                                     return (outlet.name === this.state.funnels[k].outlet_name);
                                 });
                                 var status = false;
                                 this.state.info.exec_funnel.map(v => {
                                     console.log(v)
                                     if (v == this.state.funnels[k].name){status = true;}
                                 });

                                 var rule = {
                                     name: this.state.funnels[k].name,
                                     filter: filter,
                                     action: action,
                                     outlet: outlet,
                                     status: status
                                 };
                                 rule_list.push(rule);
                             }
                             this.setState({rule_list: rule_list});
                            });

        // post処理を書く予定
    }

    render(){
        if (this.props.location.state){
            var rule = {
                name: this.props.location.state.name,
                filter: {
                    name: this.props.location.state.f_name,
                    condition: this.props.location.state.filter_dsl
                },
                action: {
                    name: this.props.location.state.a_name,
                    modifier: this.props.location.state.action_dsl
                },
                outlet: {
                    name: this.props.location.state.o_name,
                    informant: this.props.location.state.outlet_dsl
                },
                status: false
            };

            fetch("http://localhost:4567/funnels", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rule)
            })
        }


	    return(
		    <div>
              <h1>RuleList</h1>
              <p/>
              <CardColumns>
                {rule && <Funnel rule={rule} info = {this.state.info} handleSwitch = {this.handleSwitch}/>}
                {this.state.rule_list.map((rule,i) => (<Funnel rule={rule} info = {this.state.info} handleSwitch = {this.handleSwitch}/>))}
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
