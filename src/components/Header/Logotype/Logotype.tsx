import React from 'react';
import "./Logotype.scss";
import { Link } from 'react-router-dom';

const Logotype = () => {
	return (
		<Link to="/" className='logotype'>
			Conspector
		</Link>
	);
};

export default Logotype;