import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import React from 'react'
import FeaturedCourse from './FeaturedCourse';

const CarouselFront = () => {
  const [value, setValue] = React.useState(0);
  function onChange(value) {
    setValue(value);
  }
  return (
    <Carousel
    
    breakpoints={{
      640: {
        plugins: [
         {
           resolve: slidesToShowPlugin,
           options: {
            numberOfSlides: 1
           }
         },
       ]
      },
      900: {
        plugins: [
         {
           resolve: slidesToShowPlugin,
           options: {
            numberOfSlides: 2
           }
         },
       ]
      }
    }}
        value={value}
        onChange={onChange}
        arrows
        infinite
        slidesPerPage={2}
       
      >
        <FeaturedCourse />
        <FeaturedCourse />
        <FeaturedCourse />

 
      </Carousel>
  )
}

export default CarouselFront
