import React from 'react';
import Spottable from '@enact/spotlight/Spottable';
import kind from '@enact/core/kind';

const handleRight = (_, props) => {
	const {setTranslateXIndex, elIndex, width, dataLength} = props;
	if(elIndex < dataLength) {
		setTranslateXIndex((prev) => prev - 960);
	}
}

const handleLeft = (_, props) => {
	const {setTranslateXIndex, elIndex, width, dataLength} = props;
	if(elIndex > 1) {
		setTranslateXIndex((prev) => prev + 960);
	}
	
}

const SpottableAutoSwiperComponent = Spottable(kind({
	name: 'SpottableComponent',
	handlers: {
		onKeyDown: (evt, props) => { 
			const { keyCode } = evt;
			console.log(keyCode);
			if(keyCode === 39) {
				handleRight(evt, props)
			}
			if(keyCode === 37) {
				handleLeft(evt, props)
			}
		 }
	},
	render: (props) => {
		const { text, width = '100', height = 200 } = props;
		return (
			<div style={{
				boxSizing: 'border-box',
				border:'1px solid red',
				height:`${height}px`,
				width: `${width}px`,
				margin: '20px 0',
			}} {...props} >{text}</div>
		);
	}
}));

export default SpottableAutoSwiperComponent;
