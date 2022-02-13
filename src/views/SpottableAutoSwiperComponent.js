import React from 'react';
import Spottable from '@enact/spotlight/Spottable';
import kind from '@enact/core/kind';
import {forKey, handle, oneOf} from '@enact/core/handle';

const handleRight = (_, props) => {
	props.setIndex((prev) => prev - 960);
}

const handleLeft = (_, props) => {
	props.setIndex((prev) => prev + 960);
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
		const { text, width = '100px' } = props;
		return (
			<div style={{
				boxSizing: 'border-box',
				border:'1px solid red',
				height:'100px',
				width: `${width}px`,
			}} {...props} >{text}</div>
		);
	}
}));

export default SpottableAutoSwiperComponent;
