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
        fetch( "http://localhost:4567/info/calendars")
            .then( response => response.json() )
            .then( calendars_json =>  {
                fetch( "http://localhost:4567/funnels/")
                    .then( response => response.json() )
                    .then( funnels => {
                        fetch("http://localhost:4567/filters/")
                            .then( response => response.json() )
                            .then( filters =>  {
                                fetch("http://localhost:4567/actions/")
                                    .then( response => response.json() )
                                    .then( actions =>  {
                                        fetch("http://localhost:4567/outlets/")
                                            .then( response => response.json() )
                                            .then( outlets =>  {
                                                fetch( "http://localhost:4567/info/")
                                                    .then( response => response.json() )
                                                    .then( info =>  {
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
                                                            var status = false;
                                                            info.exec_funnel.map(v => {
                                                                if (v == funnels[k].name){status = true;}
                                                            });
                                                            var rule = {
                                                                name: funnels[k].name,
                                                                filter: filter,
                                                                action: action,
                                                                outlet: outlet,
                                                                status: status
                                                            };
                                                            rule_list.push(rule);
                                                        }
                                                        this.setState({rule_list: rule_list.reverse()});
                                                        this.setState({info: info});

                                                        var calendars = []
                                                        calendars_json.items.map(c => {
                                                            calendars[c.summary] = c.id
                                                        })
                                                        this.setState({calendars: calendars});
                                                        console.log(this.state.calendars)
                                                    });
                                            });
                                    });
                            });
                    });
            });
    }

    render(){
        if (this.props.location.state && this.props.location.state.name != ""){
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
        }
	    return(
		    <div>
              <h1>RuleList</h1>
              <p/>
              <CardColumns>
                {rule && <Funnel rule={rule} info = {this.state.info} calendars = {this.state.calendars} handleSwitch = {this.handleSwitch}/>}
                {this.state.rule_list.map((rule,i) => (<Funnel rule={rule} info = {this.state.info} calendars = {this.state.calendars} handleSwitch = {this.handleSwitch}/>))}
            </CardColumns>
                <Link to="/calendar/">
                <Button variant="outline-secondary">
                カレンダへ戻る
            </Button>
                </Link>&nbsp;
		    </div>
	    );

        // ページを描画してから，post
        fetch("http://localhost:4567/funnels", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rule)
        })
    }
}

export default PageOfFunnelList;
