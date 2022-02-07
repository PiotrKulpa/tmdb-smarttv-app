import {render} from 'react-dom';
import App from './App';
import './index.css'
import 'swiper/swiper-bundle.css'

const appElement = (<App />);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;
