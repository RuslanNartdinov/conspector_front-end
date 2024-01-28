import React from 'react';
import "./MyAbs.scss"
import { IAbstract} from '../../../../helpers/AbstractsData';

const MyAbs = (props : {data : IAbstract}) => {
	return (
		<div className='my-abs' key={props.data.id}>
			{props.data.name}
		</div>
	);
};

export default MyAbs;