export interface INavBarButton {
	key : number,
	name : string,
	link : string
}

const NavBarButtons : Array<INavBarButton> 
=[	
	{
		key : 0,
		name: "Main",
		link: "/"
	},
	{
		key: 1,
		name: "Articles",
		link: "/articles"
	},
	{
		key: 2,
		name: "Conspects",
		link: "/conspects"
	},
	{
		key: 3,
		name: "Profile",
		link: "/profile"
	},
	{
		key: 4,
		name: "About us",
		link: "/about_us"
	}
]
export default NavBarButtons;