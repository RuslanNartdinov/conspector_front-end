import React from 'react';
import "./MyAbs.scss"
import { IAbstractData } from '../../../../helpers/AbstractsData';

const MyAbs = (props : {data : IAbstractData}) => {
	return (
		<div className='my-abs' key={props.data.id}>
			{props.data.name}
		</div>
	);
};

export default MyAbs;