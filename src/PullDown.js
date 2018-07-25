import React from 'react';

const PullDown =(props)=> {
	const items = props.data.map(v => {
		return <option value={v} key={v}>{v}</option>;
	});

	return (
		<label>
		  <select  onChange={props.handleChange}>
			{items}
		  </select>
		</label>
	);
}

export default PullDown;
