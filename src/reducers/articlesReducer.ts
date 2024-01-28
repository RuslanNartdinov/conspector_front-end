import { IArticle } from "../helpers/ArticlesData";

import { INITIALIZE_ARTICLES, IarticlesAction } from "../actions/articlesActions";
import { LIKE_ARTICLE, DISLIKE_ARTICLE } from "../actions/articlesActions";
// export interface IArticles{
// 	name: string,
// 	description: string,
// 	id: number,
// 	views: number,
// 	likes: number,
// 	dislikes: number
// }

const initialState : IArticle[] = [
	{
		name: '',
		description: '',
		id: 0,
		views: 0,
		likes: 0,
		dislikes: 0,
		liked : false,
		disliked : false,
	}
]

export function articlesReducer (state = initialState, action : IarticlesAction) : IArticle[] | Promise<IArticle[]> {
	switch (action.type) {
		case LIKE_ARTICLE :
			return state.map(article=>{

				if(article.liked)
					return article
				if(article.id === action.id)
				{
					article.liked = true;
					article.likes++;
					if(article.disliked){
						article.disliked = false;
						article.dislikes--;
					}
				}

				return article
			})
		case DISLIKE_ARTICLE :
			return state.map(article=>{

				if(article.disliked)
					return article
				if(article.id === action.id)
				{
					article.disliked = true;
					article.dislikes++;
					if(article.liked){
						article.liked = false;
						article.likes--;
					}
				}

				return article
			})
		case INITIALIZE_ARTICLES :
			if(typeof action.data === "undefined")
				return state
			return action.data
		default : 
			return state
	}
}