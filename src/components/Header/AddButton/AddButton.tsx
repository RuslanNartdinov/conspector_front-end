import React from 'react';
import "./AddButton.scss"

const AddButton = (props:{children: string}) => {
	return (
		<div className='add-button'>
			{props.children}
		</div>
	);
};

export default AddButton;