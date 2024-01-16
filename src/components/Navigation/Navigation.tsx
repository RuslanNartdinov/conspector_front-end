import React from 'react';
import Section from './Section/Section';
import "./Navigation.scss"
import NavigationData from '../../helpers/NavigationBtns';

const Navigation = () => {
	return (
		<div className="navigation">
			<div className="navigation__container">
				{NavigationData.map((section)=>{
					return (
						<Section data={section}/>
					)
				})}
			</div>
		</div>
	);
};

export default Navigation;