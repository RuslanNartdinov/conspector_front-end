import { IArticles } from "../helpers/ArticlesData";

export const LIKE_ARTICLE = "LIKE_ARTICLE"
export const DISLIKE_ARTICLE = "DISLIKE_ARTICLE"
export const INITIALIZE_DATA = "INITIALIZE_DATA"

export type articlesAction = typeof LIKE_ARTICLE | typeof DISLIKE_ARTICLE | typeof INITIALIZE_DATA;
export interface IarticlesAction {
	type : articlesAction,
	id? : number,
	data? : IArticles[]
}

export function likeArticleAction (id : number) : IarticlesAction {
	return {
		type : LIKE_ARTICLE,
		id
	}
}

export function dislikeArticleAction (id : number) : IarticlesAction {
	return {
		type : DISLIKE_ARTICLE,
		id
	}
}

export function initializeDataAction (data : IArticles[]) {
	return {
		type : INITIALIZE_DATA,
		data
	}
}