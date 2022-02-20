import React from 'react';
import Spottable from '@enact/spotlight/Spottable';
import kind from '@enact/core/kind';
import {forKey, handle} from '@enact/core/handle';

const logForEnterKey = handle(
  forKey('enter'),
  (evt, props) => {
		props.scrollTo()
	}
);

const SpottableComponent = Spottable(kind({
	name: 'SpottableComponent',
	handlers: {
		onKeyDown: (evt, props) => { logForEnterKey(evt, props) }
	},
	render: (props) => {
		const { text } = props;
		return (
			<div style={{height: '950px', border: 'solid 1px black'}} {...props} >{text}</div>
		);
	}
}));

export default SpottableComponent;
