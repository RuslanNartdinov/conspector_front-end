import React from 'react';
import "./NavBarButton.scss"
import { INavBarButton } from '../../../../helpers/NavBarButtons';
// const NavBarButton = ({children, name} : {children: string, name: string}) => {
// 	return (
// 		<div className='nav-bar_button'>
// 			{children + name}
// 		</div>
// 	);
// };

const NavBarButton = (props : {button : INavBarButton}) => {
	return (
		<div className="nav-bar_button__container">
			<div className='nav-bar_button'>
				{props.button.name}
			</div>
		</div>
	);
};

export default NavBarButton;