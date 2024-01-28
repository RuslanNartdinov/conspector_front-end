import React from 'react';
import "./Article.scss"
import { IArticle } from '../../../../helpers/ArticlesData';
import { useDispatch } from 'react-redux';
import { likeArticleAction, dislikeArticleAction } from '../../../../actions/articlesActions';

const Article = (props : {data : IArticle}) => {
	const dispatch = useDispatch();
	const handleLike = () =>{
		dispatch(likeArticleAction(props.data.id));
	}
	const handleDislike = () =>{
		dispatch(dislikeArticleAction(props.data.id));
	}
	return (
		<div className='article'>
			<div className="artcile-name">{props.data.name}</div>
			<div className="article-description">{props.data.description}</div>
			<div className="article-state">
				<div className="article-state_likes" onClick={handleLike}>{props.data.likes}</div>
				<div className="article-state_dislikes" onClick={handleDislike}>{props.data.dislikes}</div>
			</div>
		</div>
	);
};

export default Article;