import kind from '@enact/core/kind';
import SpotlightContainerDecorator, {spotlightDefaultClass} from '@enact/spotlight/SpotlightContainerDecorator';

import SpottableComponent from './SpottableComponent'

const Wrapper = ({children, ...rest}) => (
	<div {...rest}>{children}</div>
);

const GroupedComponentWrapper = SpotlightContainerDecorator( {enterTo: 'default-element'}, Wrapper);

const GroupedComponent = kind({
	render: () => {

	return	<GroupedComponentWrapper>
			<SpottableComponent text="Movies"  />
			<SpottableComponent text="Series" className={spotlightDefaultClass}/>
		</GroupedComponentWrapper>
	}
});

export default GroupedComponent;