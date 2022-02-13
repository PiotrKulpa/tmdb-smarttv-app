import React, { Component, useState, useRef, useEffect } from "react";
import SpotlightContainerDecorator, {spotlightDefaultClass} from '@enact/spotlight/SpotlightContainerDecorator';
import kind from '@enact/core/kind';
import SpottableAutoSwiperComponent from './SpottableAutoSwiperComponent';
import { Swiper, SwiperSlide } from 'swiper/react';


const Wrapper = ({children, width,...rest}) => {
  const refContainer = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1920);
  const [index, setIndex] = useState(0);
  
  const oryginalData = [1, 2, 3, 4, 5];
  const data = [oryginalData[oryginalData.length -1],...oryginalData.slice(0,2)]
console.log(data);
  useEffect(() => {
   
    setContainerWidth(refContainer.current.offsetWidth);
    setIndex(-refContainer.current.offsetWidth/4)
  }, [refContainer, setContainerWidth]);
 
  return (
	<div
    ref={refContainer}
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
      {data.map((el, i) => {
        return (
          <SpottableAutoSwiperComponent className={i === 1 ? spotlightDefaultClass : ''} text={el} {...{setIndex}} width={containerWidth/2}/>
        )
      })}
    </div>
  </div>
)};

const GroupedComponentWrapper = SpotlightContainerDecorator( {enterTo: 'last-focused'}, Wrapper);

const AutoCarousel = kind({
  functional: true,
	render: ({width}) => {

    return (
    <GroupedComponentWrapper {...{width}}/>
  )}
});

export default AutoCarousel;