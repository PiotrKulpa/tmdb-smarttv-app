import React from 'react';
import Spottable from '@enact/spotlight/Spottable';
import kind from '@enact/core/kind';
import {forKey, handle} from '@enact/core/handle';

const logForEnterKey = handle(
  forKey('right'),
  (evt, props) => {
		console.log(props);
		props.setIndex(-100);
	}
);

const SpottableSwiperComponent = Spottable(kind({
	name: 'SpottableComponent',
	handlers: {
		onKeyDown: (evt, props) => { logForEnterKey(evt, props) }
	},
	render: (props) => {
		const { text } = props;
		return (
			<div style={{
				boxSizing: 'border-box',
				border:'1px solid red',
				height:'100px',
				width: '100px',
			}} {...props} >{text}</div>
		);
	}
}));

export default SpottableSwiperComponent;
