import React, { Component, useState } from "react";
import SpotlightContainerDecorator, {spotlightDefaultClass} from '@enact/spotlight/SpotlightContainerDecorator';
import kind from '@enact/core/kind';
import SpottableSwiperComponent from './SpottableSwiperComponent';


const Wrapper = ({children, data, width, height, ...rest}) => {

  const [translateXIndex, setTranslateXIndex] = useState(0);
  
  return (
	<div
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
      {data && data.map(({title = '', backdrop_path = ''}, elIndex) => {
        return (
          <SpottableSwiperComponent 
            width={width} 
            height={height}
            text={title} 
            elIndex={elIndex + 1}
            dataLength={data.length} 
            {...{setTranslateXIndex}}
            backImg={backdrop_path}
          />
        )
      })}
    </div>
  </div>
)};

const GroupedComponentWrapper = SpotlightContainerDecorator( {enterTo: 'last-focused'}, Wrapper);

const Carousel = kind({
  functional: true,
	render: ({data, width, height}) => (
    <GroupedComponentWrapper {...{data, width, height}}/>
  )
});

export default Carousel;