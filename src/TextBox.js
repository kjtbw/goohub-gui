import React from 'react';

const TextBox =(props)=> {
	return (
		<input type="text" onChange={props.handleTextChange}>
		</input>
	);
}

export default TextBox;
