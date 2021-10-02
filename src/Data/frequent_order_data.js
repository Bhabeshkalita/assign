import HotelSaravana from "../assets/image/hotel_saravana.webp";
import BarbequeDelight from "../assets/image/barbeque_delight.webp";
import MalabarHotel from "../assets/image/malabar_hotel.webp";
import PunjabiDhaba from "../assets/image/punjabi_dhaba.webp";

export const frequentOrderSliderSettings = {
    desktop:{
        breakpoint:{ max:3000 , min:1300 },
        item : 4
    },
    tabletLendscape:{
        breakpoint:{ max:1300 , min: 1000} ,
        item : 3
    },
    tabletPortrait:{
        breakpoint:{max: 1000 , min: 650},
        item : 2
    },
    mobile:{
        breakpoint: { max:650 , min: 0 },
        item: 1
    }
}
export const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    className:"frequent_slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

const frequentOrderData = [
    {
        id: 1,
        image:HotelSaravana,
        hotelName:'Hotel Sarvana Delight' ,
        hotelLocation:'Indra nagar',
    },
    {
        id: 2,
        image:BarbequeDelight,
        hotelName:'Barbeque Delight' ,
        hotelLocation:'Venkatapura',
    },
    {
        id: 3,
        image:MalabarHotel,
        hotelName:'Malabar Hotel' ,
        hotelLocation:'Koramangala',
        discount:"60%"
    },
    {
        id: 4,
        image:PunjabiDhaba,
        hotelName:'Punjabi Dhaba' ,
        hotelLocation:'Teachers colony',
    },
    {
        id: 5,
        image:PunjabiDhaba,
        hotelName:'Punjabi Dhaba' ,
        hotelLocation:'Teachers colony',
    },

]

export const getFrequentOrderData = () => frequentOrderData ;