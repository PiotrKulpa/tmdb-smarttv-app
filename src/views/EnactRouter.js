import {useState, useCallback} from 'react';
import kind from '@enact/core/kind';
import Spottable from '@enact/spotlight/Spottable';
import {forKey, handle, forward} from '@enact/core/handle';
import Routable, {  Linkable} from '@enact/ui/Routable';
import SpotlightContainerDecorator from '@enact/spotlight/SpotlightContainerDecorator';

const MenuContainer = ({children, ...rest}) => (
	<div {...rest}>{children}</div>
);

const MenuWrapper = SpotlightContainerDecorator( {enterTo: 'last-focused'}, MenuContainer);

// TODO: menu container
const MenuItemBase = Spottable(kind({
  name: 'MenuItem',
  handlers: {
	  onKeyDown: handle(
			forKey('enter'),
		  forward('onClick')
	  )
  },
  render: ({...rest}) => {
	  return (
		  <span {...rest} />
	 );
  }
}));

const MenuItem = Linkable({navigate: 'onClick'}, MenuItemBase);

const Main = () => (
  <div>
		<MenuWrapper>
			<MenuItem path="./about">About</MenuItem>
			<MenuItem path="./faq">FAQ</MenuItem>
		</MenuWrapper>
  </div>
);

const Views = Routable({navigate: 'onNavigate'}, ({children}) => <div>{children}</div>);

const About = () => (<div>Greetings! We are Enact team.</div>);

const Faq = () => (<div>List of FAQ</div>);

const Sample = (props) => {
  // use 'main' for the default path
  const [path, nav] = useState('about');
  // if onNavigate is called with a new path, update the state
  const handleNavigate = useCallback((ev) => {
		console.log('handleNavigate path', ev);
		nav(ev.path), [nav]
	});

  return (
	<Views {...props} path={path} onNavigate={handleNavigate}>
		{/* <Route path="main"  component={Main}> */}
		<Main />
			<Route path="about" component={About} />
			<Route path="faq" component={Faq} />
		{/* </Route> */}
	</Views>
  );
};