import { IAbstract } from "../helpers/AbstractsData";


export const INITIALIZE_ABSTRACTS = "INITIALIZE_ABSTRACTS"
export type abstractsAction = typeof INITIALIZE_ABSTRACTS;

export interface IabstractsAction {
	type : abstractsAction,
	id? : number,
	data? : IAbstract[]
}

export function initializeAbstractsAction (data : IAbstract[]) {
	return {
		type : INITIALIZE_ABSTRACTS,
		data
	}
}