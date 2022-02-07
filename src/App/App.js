import kind from '@enact/core/kind';
import SpotlightRootDecorator from '@enact/spotlight/SpotlightRootDecorator';
import SpottableComponent from '../views/SpottableComponent';
import GroupedComponent from '../views/GroupedComponent';
import Carousel from '../views/Carousel';

import {
  HashRouter,
  Route,
	Routes,
	Link,
	useNavigate,
} from "react-router-dom";

const Menu = () => {
	let navigate = useNavigate();

	return (
		<>
			<Link to="/about"><SpottableComponent text="About" navigate={() => navigate('/about')}/></Link>
			<Link to="/faq"><SpottableComponent text="Faq" navigate={() => navigate('/faq')}/></Link>
		</>
	)};

const About = () => (<div>Greetings! We are Enact team.</div>);

const Faq = () => (<div>List of FAQ</div>);

const App = SpotlightRootDecorator(kind({
	name: 'SpotlightRootDecorator',
	render: (props) => {
		return (
			<>
			

			<HashRouter >
			<Menu />
			<Routes>
				
					<Route
						path="about"
						element={<About />}
					/>
					<Route path="faq" element={<Faq />} />
				
			</Routes>
			</HashRouter>
			<SpottableComponent text="Spottable component test"/>
			<SpottableComponent text="Spottable component test 2"/>
			<GroupedComponent />
			<Carousel />
		
			</>
		);
	}
}));

export default App;