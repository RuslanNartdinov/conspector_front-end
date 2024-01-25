import { AbstractData } from "./AbstractsData"
import { ArticlesData } from "./ArticlesData";

export class fakeFetch {
	constructor(link: string = '') {
		console.log(`Class Fake fetch was constructed with link: ${link}`);
	}
	private msRandomizer() {
		return Math.floor(Math.random() * 2000);
	}
	get get(): any {
		const summarize = {
			abstracts: AbstractData, 
			articles: ArticlesData
		}
		return new Promise(resolve=>{
			setTimeout(()=>{resolve(summarize)}, this.msRandomizer())
		})
	}
	post() {
		setTimeout(()=>{}, this.msRandomizer())
	}
	put() {
		setTimeout(()=>{}, this.msRandomizer())
	}
	delete() {
		setTimeout(()=>{}, this.msRandomizer())
	}
}