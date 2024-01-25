import React from 'react';
import "./MyAbstracts.scss"
import { IAbstractData } from '../../../helpers/AbstractsData';
import { fakeFetch } from '../../../helpers/FakeFetch';
import MyAbs from './MyAbs/MyAbs';
import Input from "./Input/Input";

const MyAbstracts = () => {
	const [myAbstracts, setMyAbstracts] = React.useState<IAbstractData[]>();

	React.useEffect(()=>{
		const handleFakeFetch = async () =>{
			const api = new fakeFetch("some_linkXD");
			const items = await api.get
			setMyAbstracts(items.abstracts);
		}
		handleFakeFetch();
	},[myAbstracts])
	return (
		<div className="my-abstracts">
			<div className="my-abstracts__search">
				<div className="search__name">My Abstracts:</div>
				<div className="search__input"><Input/></div>
			</div>
			<div className='my-abstracts__container'>
				{myAbstracts?.map((abstract)=>{
					return (
						<MyAbs key={abstract.id} data={abstract}/>
					)
				})}
			</div>
		</div>
	);
};

export default MyAbstracts;