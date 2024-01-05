import React from 'react';
import "./NavBar.scss"
import NavBarButton from './NavBarButton/NavBarButton';
import NavBarButtons from '../../../helpers/NavBarButtons';

const NavBar = () => {
	return (
		<div className='nav-bar'>
			{NavBarButtons.map((button)=><NavBarButton key={button.key} button={button}/>)}
		</div>
	);
};

export default NavBar;