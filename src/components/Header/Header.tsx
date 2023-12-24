import React from 'react';
import "./Header.scss"
import NavBar from './NavBar/NavBar';
import Burger from './Burger/Burger';
import AddButton from './AddButton/AddButton';

const Header = () => {
	return (
		<div className='header'>
			<NavBar/>
			<Burger/>
			<AddButton/>
		</div>
	);
};

export default Header;