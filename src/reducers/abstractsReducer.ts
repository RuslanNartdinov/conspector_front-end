import { IAbstract } from "../helpers/AbstractsData";
import { IabstractsAction } from "../actions/abstractsActions";
import { INITIALIZE_ABSTRACTS } from "../actions/abstractsActions";

// export interface IAbstract{
// 	name: string,
// 	id: number
// }

const initialState : IAbstract[] = [
	{
		name : '',
		id : 0
	}
]

export function abstractsReducer (state = initialState, action : IabstractsAction) : IAbstract[] | Promise<IAbstract[]> {
	switch (action.type){
		case INITIALIZE_ABSTRACTS :
			if(typeof action.data === "undefined")
				return state
			return action.data;
	default :
		return state;
	}
}