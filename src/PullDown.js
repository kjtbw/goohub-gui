import React, {Component} from 'react';

class PullDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.data[0]
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event) {
		alert('Slected column is: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		const items = this.props.data.map(v => {
			return <option value={v} key={v}>{v}</option>;
		});

		return (
				<form onSubmit={this.handleSubmit}>
				<label>
				Pick any column:
				<select value={this.state.value} onChange={this.handleChange}>
				{items}
			</select>
				</label>
				<input type="submit" value="Submit" />
				<div>
				{this.state.value}
			</div>
				</form>
		);
	}
}
export default PullDown;
