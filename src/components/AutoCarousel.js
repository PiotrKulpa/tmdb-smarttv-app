import React, { Component, useState, useRef, useEffect } from "react";
import SpotlightContainerDecorator, {spotlightDefaultClass} from '@enact/spotlight/SpotlightContainerDecorator';
import kind from '@enact/core/kind';

import SpottableAutoSwiperComponent from './SpottableAutoSwiperComponent';


const Wrapper = ({children, width, windowHeight = '900', data, ...rest}) => {
  const refContainer = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1920);
  const [translateXIndex, setTranslateXIndex] = useState(0);
  console.log(data);
  const oryginalData = [1, 2, 3, 4, 5];
  // const data = [oryginalData[oryginalData.length -1],...oryginalData.slice(0,2)]
  useEffect(() => {
    setContainerWidth(refContainer.current.offsetWidth);
    setTranslateXIndex(-refContainer.current.offsetWidth/4)
  }, [refContainer, setContainerWidth]);
 
  return (
	<div
    ref={refContainer}
    style={{
      display:'flex',
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
      {data && data.map(({title = '', backdrop_path = '' }, elIndex) => {
        return (
          <SpottableAutoSwiperComponent 
            className={elIndex === 1 ? spotlightDefaultClass : ''} 
            text={title} 
            {...{setTranslateXIndex}} 
            width={containerWidth/2}
            dataLength={data.length}
            elIndex={elIndex + 1}
            height={windowHeight/2}
            backImg={backdrop_path}
          />
        )
      })}
    </div>
  </div>
)};

const GroupedComponentWrapper = SpotlightContainerDecorator( {enterTo: 'last-focused'}, Wrapper);

const AutoCarousel = kind({
  functional: true,
	render: ({width, windowHeight, data}) => {

    return (
    <GroupedComponentWrapper {...{width, windowHeight, data}}/>
  )}
});

export default AutoCarousel;