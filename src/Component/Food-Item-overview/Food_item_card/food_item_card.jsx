import clsx from 'clsx';
import React from 'react' 
import { truncatString } from '../../../utils/truncateString';
import CornerRibbon from '../../card-corner-ribbon/cardCornerRibbon';
import style from './food_item_card.module.scss'

const FoodItemCard = ({data}) => {
    return(
        <div className={style.foodItemCard}>
            {data.discount && <CornerRibbon discount={data.discount} />}
            <div className={style.foodItemCard_image}>
                <img src={data.image} />
            </div>
            <div className={style.foodItemCard_content}>
                <h4>{truncatString(data.hotelName , 30)} </h4>
                <p> ₹{data.price}/-  <span> &middot; {data.dishes} dishes</span></p>
                <div className={style.foodItemCard_content_ratingsAndFoodType}>
                    <div className={style.foodItemCard_content_ratingsAndFoodType_ratings}>
                        <span className={style.foodItemCard_content_ratingsAndFoodType_ratings_span1}>{data.rating}</span>
                        <span className={style.foodItemCard_content_ratingsAndFoodType_ratings_span2}>{data.noOfRatings} Ratings</span>                        
                    </div>
                    <div className={style.foodItemCard_content_ratingsAndFoodType_foodType}>
                        {data.nonVeg && (
                            <div className={clsx(
                                style.foodItemCard_content_ratingsAndFoodType_foodType_indicator,
                                style.foodItemCard_content_ratingsAndFoodType_foodType_indicatorNonVeg)}>
                                <div></div>
                            </div>
                        )}
                        {data.veg && (
                            <div className={style.foodItemCard_content_ratingsAndFoodType_foodType_indicator}>
                                <div></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItemCard ;