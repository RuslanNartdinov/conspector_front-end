import { IArticle } from "../helpers/ArticlesData";


export const LIKE_ARTICLE = "LIKE_ARTICLE"
export const DISLIKE_ARTICLE = "DISLIKE_ARTICLE"
export const INITIALIZE_ARTICLES = "INITIALIZE_DATA"
export type articlesAction = typeof LIKE_ARTICLE | typeof DISLIKE_ARTICLE | typeof INITIALIZE_ARTICLES;

export interface IarticlesAction {
	type : articlesAction,
	id? : number,
	data? : IArticle[]
}

export function likeArticleAction (id : number){
	return {
		type : LIKE_ARTICLE,
		id
	}
}

export function dislikeArticleAction (id : number){
	return {
		type : DISLIKE_ARTICLE,
		id
	}
}

export function initializeArticlesAction (data : IArticle[]) {
	return {
		type : INITIALIZE_ARTICLES,
		data
	}
}