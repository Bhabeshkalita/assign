import React from 'react'
import FrequentlyOrder from './Component/frequently-Ordered/frequently_order.component';
import FrequentlyOrderCard from './Component/frequently-Ordered/Frequently_order_card/frequentlyOrderCard';
// import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './app.scss'
import FoodItem from './Component/Food-Item-overview/Food_item.component';
function App() {
  return (
   <div className='container'>
     <FrequentlyOrder />
     <FoodItem />

   </div>
  );
}

export default App;
