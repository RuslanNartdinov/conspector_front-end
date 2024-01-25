export interface IArticles{
	name: string,
	description: string,
	id: number,
	views: number,
	likes: number,
	dislikes: number
}

export const ArticlesData: Array<IArticles> = [
	{
		name: "Python с 0 до Junior Developer",
		description: "Расскажем и покажем как стать программистом на примере профессии Backend-разработчик",
		id: 0,
		views: 134,
		likes: 13,
		dislikes: 3
	},
	{
		name: "Синкай Макото: мегаполис, первая любовь и разлука",
		description: "Биография одно из самых популярных аниматоров современности, чьи работы, рассчитанные на подростков, поднимают вполне взрослые проблемы",
		id: 1,
		views: 134,
		likes: 13,
		dislikes: 3
	},
	{
		name: "Почему азитские културы такие разные",
		description: "Китайцы, корейцы, японцы, вьетнамцы и все все все",
		id: 2,
		views: 134,
		likes: 13,
		dislikes: 3
	}
]