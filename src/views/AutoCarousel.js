import React, { Component, useState } from "react";
import SpotlightContainerDecorator, {spotlightDefaultClass} from '@enact/spotlight/SpotlightContainerDecorator';
import kind from '@enact/core/kind';
import SpottableSwiperComponent from './SpottableSwiperComponent';
import { Swiper, SwiperSlide } from 'swiper/react';


const Wrapper = ({children, width,...rest}) => {

  const [index, setIndex] = useState(-width/2);
  console.log(index);
  const data = [1, 2, 3, 4, 5];
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
        transform: `translateX(${index}px)`,
        transition: 'transform 700ms',
      }}
    >
      {data.map((el) => {
        return (
          <SpottableSwiperComponent text={el} {...{setIndex, width}}/>
        )
      })}
    </div>
  </div>
)};

const GroupedComponentWrapper = SpotlightContainerDecorator( {enterTo: 'default-element'}, Wrapper);

const AutoCarousel = kind({
  functional: true,
	render: ({width}) => {

    return (
    <GroupedComponentWrapper {...{width}}/>
  )}
});

export default AutoCarousel;