import React from 'react';
import Form from 'react-bootstrap/Form'

const TextBox =(props)=> {
	return (
		<Form.Control  onChange={props.handleTextChange}/>
	);
}

export default TextBox;
