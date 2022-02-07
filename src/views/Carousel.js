import React, { Component, useState } from "react";
import SpotlightContainerDecorator, {spotlightDefaultClass} from '@enact/spotlight/SpotlightContainerDecorator';
import kind from '@enact/core/kind';
import SpottableSwiperComponent from './SpottableSwiperComponent';
import { Swiper, SwiperSlide } from 'swiper/react';


const Wrapper = ({children, ...rest}) => {

  const [index, setIndex] = useState(0);
  
  return (
	<div
    style={{
      display:'flex',
    border:'1px solid black',
    height:'200px',
    width: '200px',
    overflow:'hidden',
    }}
    {...rest}
  >
    <div
      style={{
        display:'flex',
        transform: `translateX(${index}px)`,
        transition: 'transform 700ms',
      }}
    >
      <SpottableSwiperComponent {...{setIndex}} text="Carousel 1" />
      <SpottableSwiperComponent text="Carousel 2" />
      <SpottableSwiperComponent text="Carousel 3" />
      <SpottableSwiperComponent text="Carousel 4" />
      <SpottableSwiperComponent text="Carousel 5" />
      <SpottableSwiperComponent text="Carousel 6" />
    </div>
  </div>
)};

const GroupedComponentWrapper = SpotlightContainerDecorator( {enterTo: 'default-element'}, Wrapper);

const Carousel = kind({
  functional: true,
	render: () => (
    <GroupedComponentWrapper />
  )
});

export default Carousel;