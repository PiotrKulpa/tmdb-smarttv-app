import { Link, DirectLink, Element, Events, scroll, scrollSpy,  scroller, animateScroll } from 'react-scroll'

import SpottableComponent from "../components/SpottableComponent";

const Home = () => {
  return (
    <>
    <div>Home</div>
    <SpottableComponent  text="text1" onClick={() => scroller.scrollTo('test1', {duration: 500, delay: 0,
      smooth: 'easeInOutQuart'})}/>
    <SpottableComponent text="text2"/>
    <Element name="test1">
      <SpottableComponent text="text3"/>
    </Element>
    
    
    </>
  )
}

export default Home;