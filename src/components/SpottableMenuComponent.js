import React from 'react';
import Spottable from '@enact/spotlight/Spottable';
import kind from '@enact/core/kind';
import {forKey, handle} from '@enact/core/handle';

const logForEnterKey = handle(
  forKey('enter'),
  (evt, props) => {
		console.log(props);
		props.navigate()
	}
);

const SpottableMenuComponent = Spottable(kind({
	name: 'SpottableComponent',
	handlers: {
		onKeyDown: (evt, props) => { logForEnterKey(evt, props) }
	},
	render: (props) => {
		const { text } = props;
		return (
			<span style={{color: 'white', padding: '30px'}} {...props} >{text}</span>
		);
	}
}));

export default SpottableMenuComponent;
