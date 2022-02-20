import { useEffect, useState, useCallback } from "react";
import { Element, scroller } from "react-scroll";
import axios from "axios";

import SpottableComponent from "../components/SpottableComponent";
import AutoCarousel from "../components/AutoCarousel";
import Carousel from "../components/Carousel";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `${process.env.REACT_APP_TOKEN}`

const Home = () => {
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const getHomeMovies = useCallback(async () => {
    try {
      const topRatedResponse = await axios.get("/movie/top_rated");
      const {
        data: { results: topRatedResults = [] },
      } = topRatedResponse || {};
      setTopRated(topRatedResults);

      const nowPlayingResponse = await axios.get('/movie/now_playing');
      const {
        data: { results: nowPlayingResults = [] },
      } = nowPlayingResponse || {};
      setNowPlaying(nowPlayingResults);

      // const showsPremiereResponse = await axios.get('/tv/on_the_air');
      // page.getShowsPremiere(showsPremiereResponse);

      // const popularResponse = await axios.get('/movie/popular');
      // page.getPopular(popularResponse);
    } catch (error) {
      console.log(error);
    }
  }, [setTopRated, setNowPlaying]);

  useEffect(() => {
    getHomeMovies();
  }, [getHomeMovies]);

  console.log(process.env.REACT_APP_SECRET_NAME);

  return (
    <>
      <AutoCarousel data={topRated} />
      <Carousel data={nowPlaying} width={420} height={300}/>
      <Carousel data={nowPlaying} width={420} height={300}/>
      <Carousel data={nowPlaying} width={420} height={300}/>
      <Carousel data={nowPlaying} width={420} height={300}/>
      
      
      
      
      {/* <SpottableComponent
        text="text1"
        onClick={() =>
          scroller.scrollTo("test1", {
            duration: 500,
            delay: 0,
            smooth: "easeInOutQuart",
          })
        }
      />
      <SpottableComponent text="text2" />
      <Element name="test1">
        <SpottableComponent text="text3" />
      </Element> */}
    </>
  );
};

export default Home;
