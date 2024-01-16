import React from 'react';
import "./Header.scss"
import NavBar from './NavBar/NavBar';
import Burger from './Burger/Burger';
import AddButton from './AddButton/AddButton';
import Logotype from './Logotype/Logotype';

const Header = () => {
	return (
		<div className='header'>
			<div className="header__container">
				<Logotype/>
				<NavBar/>
				<Burger/>
				<AddButton>AddButton</AddButton>
			</div>
		</div>
	);
};

export default Header;