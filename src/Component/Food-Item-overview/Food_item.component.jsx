import React from 'react' ;
import { getFoodItemsData } from '../../Data/food_item_data';
import style from './food_item.module.scss' ;
import FoodItemCard from './Food_item_card/food_item_card';

// import 

const FoodItem = () => {
    const foodItem = getFoodItemsData();

    const [chipData , setChipData] = React.useState([
        {key: 0 , label : "5+ Ratings"},
        {key: 1 , label : "₹0 - ₹700"},
        {key: 2 , label : "Non-Vegeterian"},
        {key: 3 , label : "0 - 5 kms"}
    ])
    const handleDelete = (chipToDelete) => {
        setChipData((data) => data.filter((chip) => chip.key !== chipToDelete.key))
    }
    
    return(
        <div className={style.foodItem}>
            <div className={style.foodItem_heading}>
                <h4>Results ({foodItem.length}) </h4>
            </div>
            <div className={style.foodItem_filter}>
                <div>
                    {
                        chipData.map((data) => (
                            <div key={data.key}>{data.label} <span onClick={()=>{handleDelete(data)}} >close</span></div>

                        ))
                    }
                </div>
                <div></div>
            </div>
            <div className={style.foodItem_card}>
                {
                    foodItem.map(food => 
                        <div className={style.foodItem_card_container}>
                            <FoodItemCard data={food} key={food.id} />
                        </div>)
                }
                
            </div>
        </div>
    )
}

export default FoodItem ;