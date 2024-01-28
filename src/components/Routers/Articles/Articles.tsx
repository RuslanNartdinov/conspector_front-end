import React from 'react';
import "./Articles.scss"
import Article from './Article/Article';
import Input from '../MyAbstracts/Input/Input';

import { fakeFetch } from '../../../helpers/FakeFetch';
import { useSelector, useDispatch } from 'react-redux';
import { initializeArticlesAction } from '../../../actions/articlesActions';
import { RootState } from '../../../store';

const Articles = () => {
	const articles = useSelector((state : RootState)=>state.articles)
	const dispatch = useDispatch()

	React.useEffect(()=>{
		const handleInitializeData = async () => {
		  const data = await new fakeFetch().get;
		  dispatch(initializeArticlesAction(data.articles))
		}
		handleInitializeData();
	  }, [dispatch]);
	
	if (articles instanceof Promise)
	  	return (
			<div className="">Loading ...</div>
	)
	return (
		<div className='articles'>
			<div className="articles__search">
				<div className="search__name">Articles:</div>
				<div className="search__input"><Input/></div>
			</div>
			<div className='articles__container'>
				{articles?.map((article)=>{
					return (
						<Article key={article.id} data={article}/>
					)
				})}
			</div>
		</div>
	);
};

export default Articles;