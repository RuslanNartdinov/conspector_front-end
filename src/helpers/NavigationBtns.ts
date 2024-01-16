export interface INavigationSection{
	name : string,
	link : string,
	id : number
	children : Array<INavigationBtn>
}

export interface INavigationBtn{
	name : string,
	link : string,
	id : number
}

const NavigationData : Array<INavigationSection> = [
	{
		name: "My Topics",
		link: "",
		id: 0,
		children: [
			{
				name: "All",
				link: "",
				id: 0,
			},
			{
				name: "Mathematic",
				link: "",
				id: 0,
			},
			{
				name: "Programming",
				link: "",
				id: 0,
			},
			{
				name: "History",
				link: "",
				id: 0,
			},
			{
				name: "Botanic",
				link: "",
				id: 0,
			}
		]
	},
	{
		name: "Statistics",
		link: "",
		id: 0,
		children: []
	},
	{
		name: "Global Search",
		link: "",
		id: 0,
		children: []
	}
]

export default NavigationData;