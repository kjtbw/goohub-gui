import React from 'react';

const SubmitButton =(props)=> {
	return (
		<button onClick={props.handleSubmit}>
		  submit
		</button>
	);
}

export default SubmitButton;
