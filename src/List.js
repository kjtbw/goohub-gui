import React from 'react';

const List = (props) => {
	const list_items = props.data.map(hash => {
		const id = hash.name
		return <li>{id}</li>;
	});

	return (<ol>{list_items}</ol>);
}

export default List;
