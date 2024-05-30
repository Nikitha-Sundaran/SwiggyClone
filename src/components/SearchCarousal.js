import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageSwiggy } from "./constants";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 3,
    partialVisibilityGutter: 200,
  },
  desktop: {
    breakpoint: { max: 1439, min: 1261 },
    items: 3,
    partialVisibilityGutter: 120,
  },
  large: {
    breakpoint: { max: 1260, min: 1181 },
    items: 3,
    partialVisibilityGutter: 80,
  },
  tablet: {
    breakpoint: { max: 1180, min: 1025 },
    items: 4,
    partialVisibilityGutter: 60,
  },
  mobile: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  smallMobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
    partialVisibilityGutter: 20,
  },
};

const SearchCarosuel = ({data, setValue}) => {
 
  
   return (
    <div className="flex flex-col mt-4">
        <div  className="text-2xl font-bold my-4 " style={{color:'#3d4152'}}>
      Popular cuisines
      </div>
      <div className="z-0 h-24">
        <Carousel
          responsive={responsive}
          draggable={true}
          // showDots={true}
          focusOnSelect={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          infinite={true}
          partialVisible={true}
        >
          {data?.map((item) => {
            return (
              <div className='cursor-pointer  ml-14 w-28' key={item?.id} onClick={()=>setValue(item?.action?.text)}>
               <img className="  " src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/'+ item?.imageId} alt="food" />
             </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SearchCarosuel;