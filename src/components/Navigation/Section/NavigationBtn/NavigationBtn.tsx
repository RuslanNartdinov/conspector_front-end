import React from 'react';
import "./NavigationBtn.scss"
import { INavigationBtn } from '../../../../helpers/NavigationBtns';

const NavigationBtn = (props : {data : INavigationBtn}) => {
	return (
		<div>
			{props.data.name}
		</div>
	);
};

export default NavigationBtn;