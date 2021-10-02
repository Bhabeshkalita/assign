import BarbequeDelight from "../assets/image/barbeque_delight.webp";
import FoodBoxClub from "../assets/image/the_food_box_club.webp";
import TheRoofTop from "../assets/image/the_roof_top.webp";

import MeatAndEat from "../assets/image/meat_and_eat.webp";
import FatBelly from "../assets/image/fat_belly.webp";
import TheCornerCafe from "../assets/image/the_corner_cafe.webp";

import TheSteamingMugs from "../assets/image/the_steaming_mugs.webp";
import Loyans from "../assets/image/loyans.webp";
import TableTop from "../assets/image/table_top.webp";

const FoorItemsData = [
    {
        id:1,
        image:BarbequeDelight,
        hotelName:"Barbeque Delight",
        price:199,
        dishes: 10,
        rating:"1.7",
        noOfratings:213,
        discount:"30%",
        veg:true ,
        nonVeg:true

    },
    {
		id: 2,
		image: FoodBoxClub,
		hotelName: "The FoodBox Club",
		price: 199,
		dishes: 10,
		rating: "4.9",
		noOfRatings: 356,
		veg: false,
		nonVeg: true,
	},
	{
		id: 3,
		image: TheRoofTop,
		hotelName: "The Roof Top",
		price: 199,
		dishes: 10,
		rating: "5.0",
		noOfRatings: 450,
		veg: false,
		nonVeg: true,
	},
    {
		id: 4,
		image: MeatAndEat,
		hotelName: "Meat and Eat",
		price: 199,
		dishes: 10,
		rating: "1.1",
		noOfRatings: 156,
		veg: false,
		nonVeg: true,
	},
	{
		id: 5,
		image: FatBelly,
		hotelName: "Fat Belly",
		price: 199,
		dishes: 10,
		rating: "3.7",
		noOfRatings: 403,
		veg: true,
		nonVeg: false,
	},
	{
		id: 6,
		image: TheCornerCafe,
		hotelName: "The Corner's Cafe",
		price: 199,
		dishes: 10,
		rating: "2.5",
		noOfRatings: 154,
		veg: true,
		nonVeg: true,
	},
    {
		id: 7,
		image: TheSteamingMugs,
		hotelName: "The Steaming Mugs",
		price: 199,
		dishes: 10,
		rating: "5.0",
		noOfRatings: 506,
		veg: true,
		nonVeg: false,
	},
	{
		id: 8,
		image: Loyans,
		hotelName: "Loyans",
		price: 199,
		dishes: 10,
		rating: "3.4",
		noOfRatings: 591,
		veg: true,
		nonVeg: false,
		discount: "40%",
	},
	{
		id: 9,
		image: TableTop,
		hotelName: "Table Top",
		price: 199,
		dishes: 10,
		rating: "4.7",
		noOfRatings: 496,
		veg: false,
		nonVeg: true,
	},
]

export const getFoodItemsData  = () => FoorItemsData ;