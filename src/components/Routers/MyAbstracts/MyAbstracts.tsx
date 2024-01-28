import React from 'react';
import "./MyAbstracts.scss"
import MyAbs from './MyAbs/MyAbs';
import Input from "./Input/Input";

import { fakeFetch } from '../../../helpers/FakeFetch';
import { useSelector, useDispatch } from 'react-redux';
import { initializeAbstractsAction } from '../../../actions/abstractsActions';
import { RootState } from '../../../store';

const MyAbstracts = () => {
	const abstracts = useSelector((state : RootState)=>state.abstracts)
	const dispatch = useDispatch()

	React.useEffect(()=>{
		const handleInitializeData = async () => {
		  const data = await new fakeFetch().get;
		  dispatch(initializeAbstractsAction(data.abstracts))
		}
		handleInitializeData();
	  }, [dispatch]);
	if (abstracts instanceof Promise)
	  	return (
			<div className="">Loading ...</div>
	)
	return (
		<div className="my-abstracts">
			<div className="my-abstracts__search">
				<div className="search__name">My Abstracts:</div>
				<div className="search__input"><Input/></div>
			</div>
			<div className='my-abstracts__container'>
				{abstracts?.map((abstract)=>{
					return (
					<MyAbs key={abstract.id} data={abstract}/>
					)}
				)}
			</div>
		</div>
	);
};

export default MyAbstracts;