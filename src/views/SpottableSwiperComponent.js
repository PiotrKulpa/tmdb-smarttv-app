import React from 'react';
import Spottable from '@enact/spotlight/Spottable';
import kind from '@enact/core/kind';
import {forKey, handle, oneOf} from '@enact/core/handle';

const handleRight = (_, props) => {
	const {setTranslateXIndex, elIndex, width} = props;
	if(elIndex >= 4 &&  elIndex % 4 === 0) {
		console.log('przewin');
		setTranslateXIndex((prev) => -4 * width + prev);
	}
}

const handleLeft = (_, props) => {
	const {setTranslateXIndex, elIndex, width} = props;
	if(elIndex >= 4 &&  ((elIndex -1) % 4 === 0)) {
		console.log('przewin');
		setTranslateXIndex((prev) => 4 * width + prev);
	}
}

const SpottableSwiperComponent = Spottable(kind({
	name: 'SpottableComponent',
	handlers: {
		onKeyDown: (evt, props) => { 
			const { keyCode } = evt;
			if(keyCode === 39) {
				handleRight(evt, props)
			}
			if(keyCode === 37) {
				handleLeft(evt, props)
			}
		 }
	},
	render: (props) => {
		const { text, width = '100' } = props;
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

export default SpottableSwiperComponent;
