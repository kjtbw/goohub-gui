import React from 'react';

const PullDown = (props) => {
	const items = props.data.map(v => {
		return <option value={v}>{v}</option>;
	});

	return (
			<div>
			<select>{items}</select>
			</div>
	);
}

export default PullDown;
