import React from 'react';

const List = (props) => {
	const list_items = props.data.map(v => {
		return <li>{v}</li>;
	});

	return (<ol>{list_items}</ol>);
}

export default List;
