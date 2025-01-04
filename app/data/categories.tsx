import { GiKnifeFork } from "react-icons/gi";
import { RiGasStationFill } from "react-icons/ri";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoIosCafe } from "react-icons/io";
import { IoMdBeer } from "react-icons/io";
import { BsBank2 } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
export default [
	{
		id: 1,
		name: "Restaurants",
		icon: (<GiKnifeFork className="text-2xl"/>)
	},
	{
		id: 2,
		name: "Gas Station",
		icon: (<RiGasStationFill className="text-2xl"/>)
	},
	{
		id: 3,
		name: "Grocery",
		icon: (<MdLocalGroceryStore className="text-2xl"/>)
	},
	{
		id: 4,
		name: "Cafe",
		icon: (<IoIosCafe className="text-2xl"/>)
	},
	{
		id: 5,
		name: "Brewery",
		icon: (<IoMdBeer className="text-2xl"/>)
	},	{
		id: 6,
		name: "Bank",
		icon: (<BsBank2 className="text-2xl"/>)
	},	{
		id: 7,
		name: "More",
		icon: (<IoIosMore className="text-2xl"/>)
	},
]
