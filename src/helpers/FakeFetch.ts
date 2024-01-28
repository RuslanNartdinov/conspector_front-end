import { AbstractData } from "./AbstractsData"
import { ArticlesData } from "./ArticlesData";

export class fakeFetch {
	private msRandomizer() {
		return Math.floor(Math.random() * 2000);
	}
	get get(): any {
		const summarize = {
			abstracts: AbstractData, 
			articles: ArticlesData,
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