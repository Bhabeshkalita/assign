import React from "react";
import image from '../../../assets/image/fat_belly.webp'
import { truncatString } from "../../../utils/truncateString";
import CornerRibbon from "../../card-corner-ribbon/cardCornerRibbon";
import style from './frequently_order_card.module.scss'
const FrequentlyOrderCard = ({data})  => {
    return(
        <div className={style.frequentCard}>
            {data.discount && <CornerRibbon />}
            <div className={style.frequentCard_image}>
                <img src={data.image} alt={data.hotelName} />
            </div>
            <div className={style.frequentCard_content}>
                <div className={style.frequentCard_content_hotel}>
                    <div className={style.frequentCard_content_hotel_name}>{truncatString(data.hotelName ,14)}</div>
                    <div className={style.frequentCard_content_hotel_place}>{truncatString(data.hotelLocation, 14)}</div>
                </div>
                <div className={style.frequentCard_content_ReOrder}>
                    <button>RE-ORDER</button>    
                </div>                
            </div>
        </div>
    )
}

export default FrequentlyOrderCard ;