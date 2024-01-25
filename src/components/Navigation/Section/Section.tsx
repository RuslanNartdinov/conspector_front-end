import React from 'react';
import "./Section.scss"
import NavigationBtn from './NavigationBtn/NavigationBtn';
import { INavigationSection } from '../../../helpers/NavigationBtns';

const Section = (props : {data: INavigationSection}) => {

	const renderButtons = () =>{
		return (
			<div className="section__btns">
			{props.data.children.map((button)=>{
				return (
					<NavigationBtn key={button.id} data={button}/>
				)
			})}
			</div>
		)
	}
	return (
		<div className='section'>
			<div className="section__container">
				<div className="section__name">
						{props.data.name}
				</div>
				{
					props.data.children.length > 0 ? renderButtons() : ""
				}
			</div>
		</div>
	);
};

export default Section;