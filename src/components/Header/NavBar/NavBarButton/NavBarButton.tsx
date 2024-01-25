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
import { Link } from 'react-router-dom';

const NavBarButton = (props : {button : INavBarButton}) => {
	return (
		<div className="nav-bar_button__container">
			<Link to={props.button.link} className='nav-bar_button'>
				{props.button.name}
			</Link>
		</div>
	);
};

export default NavBarButton;