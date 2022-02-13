import React, { Component, useState } from "react";
import SpotlightContainerDecorator, {spotlightDefaultClass} from '@enact/spotlight/SpotlightContainerDecorator';
import kind from '@enact/core/kind';
import SpottableSwiperComponent from './SpottableSwiperComponent';
import { Swiper, SwiperSlide } from 'swiper/react';


const Wrapper = ({children, ...rest}) => {

  const [translateXIndex, setTranslateXIndex] = useState(0);
  const oryginalData = [1, 2, 3, 4, 5,6,7,8,9];
  
  return (
	<div
    style={{
      display:'flex',
    border:'1px solid black',
    height:'200px',
    width: '100%',
    overflow:'hidden',
    }}
    {...rest}
  >
    <div
      style={{
        display:'flex',
        transform: `translateX(${translateXIndex}px)`,
        transition: 'transform 700ms',
      }}
    >
      {oryginalData.map((el, elIndex) => {
        return (
          <SpottableSwiperComponent 
            width={420} 
            text={el} 
            elIndex={elIndex + 1} 
            {...{setTranslateXIndex}}
          />
        )
      })}
    </div>
  </div>
)};

const GroupedComponentWrapper = SpotlightContainerDecorator( {enterTo: 'last-focused'}, Wrapper);

const Carousel = kind({
  functional: true,
	render: () => (
    <GroupedComponentWrapper />
  )
});

export default Carousel;