import React from 'react'
import {frequentOrderSliderSettings , settings, getFrequentOrderData} from '../../Data/frequent_order_data'
import Slider from "react-slick";
import style from './frequently_order.module.scss'
import FrequentlyOrderCard from './Frequently_order_card/frequentlyOrderCard';

const FrequentlyOrder = () => {
    const frequentOrderData = getFrequentOrderData() ;
    return(
        <div className={style.frequentOrder}>
            <div className={style.frequentOrder_heading}>
                <h3>Most Frequently Ordered</h3>
            </div>
            <div className={style.frequentOrder_slider}>
                <Slider {...settings}>
                    {
                        frequentOrderData.map((card) => (
                            <div className={style.frequentOrder_slider_container}>
                                <FrequentlyOrderCard data={card} key={card.id} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default FrequentlyOrder ;


// import {frequentOrderSliderSettings , getFrequentOrderData} from '../../Data/frequent_order_data'
// // import Carousel from 'react-multi-carousel';
// import FrequentlyOrderCard from './Frequently_order_card/frequentlyOrderCard';
// import Slider from "react-slick";

// const FrequentlyOrder = () => {
//     const frequentOrderData = getFrequentOrderData() ;
//     return(
//         <div className={style.frequentOrder}>
//             <div className={style.frequentOrder_heading}>
//                 <h3>Most Frequently Ordered</h3>
//             </div>
//             <div className={style.frequentOrder_slider}>
//                 <Carousel
//                     swipeable={false}
//                     responsive={frequentOrderSliderSettings}
//                     infinite={true}
//                     arrows={true}
//                     containerClass="carousel-container"
//                     dotListClass="react-multi-dot-list"
//                 >
//                     {/* {
//                         frequentOrderData.map((card) => (
//                             <div style={{height:"10rem"}}><FrequentlyOrderCard data={card} key={card.id} /></div>
//                         ))
//                         // console.log(frequentOrderData)
//                     }                     */}
//                     <div><h1>sbdhjfg</h1></div>
//                     <div><h1>sbdhjfg</h1></div>

//                     <div><h1>sbdhjfg</h1></div>
//                     <div><h1>sbdhjfg</h1></div>
//                     <div><h1>sbdhjfg</h1></div>
//                     <div><h1>sbdhjfg</h1></div>
//                 </Carousel>
//             </div>
//         </div>
//     )
// }

// export default FrequentlyOrder ;


