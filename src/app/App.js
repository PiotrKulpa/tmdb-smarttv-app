import kind from "@enact/core/kind";
import SpotlightRootDecorator from "@enact/spotlight/SpotlightRootDecorator";
import { HashRouter, Route, Routes } from "react-router-dom";

import Menu from "../components/Menu";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import Search from "../pages/Search";

const App = SpotlightRootDecorator(
  kind({
    name: "SpotlightRootDecorator",
    computed: {
      windowHeight: () => window.innerHeight,
    },
    render: (props) => {
      const { windowHeight } = props;
      console.log(windowHeight);
      return (
        <>
          <HashRouter>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="series" element={<Series />} />
              <Route path="search" element={<Search />} />
            </Routes>
          </HashRouter>
        </>
      );
    },
  })
);

export default App;
