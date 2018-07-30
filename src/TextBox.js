import React from 'react';

const TextBox =(props)=> {
	return (
		<input type="text"  style = {{width: 125}}  onChange={props.handleTextChange}>
		</input>
	);
}

export default TextBox;
