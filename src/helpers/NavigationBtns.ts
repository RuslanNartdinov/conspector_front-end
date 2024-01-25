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
				id: 1,
			},
			{
				name: "Mathematic",
				link: "",
				id: 2,
			},
			{
				name: "Programming",
				link: "",
				id: 3,
			},
			{
				name: "History",
				link: "",
				id: 4,
			},
			{
				name: "Botanic",
				link: "",
				id: 5,
			}
		]
	},
	{
		name: "Statistics",
		link: "",
		id: 6,
		children: []
	},
	{
		name: "Global Search",
		link: "",
		id: 7,
		children: []
	}
]

export default NavigationData;