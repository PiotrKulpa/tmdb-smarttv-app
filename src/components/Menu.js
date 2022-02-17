import { Link, useNavigate } from "react-router-dom";
import SpotlightContainerDecorator from "@enact/spotlight/SpotlightContainerDecorator";

import Logo from "./Logo";
import SpottableMenuComponent from "./SpottableMenuComponent";

const Menu = ({ ...rest }) => {
  let navigate = useNavigate();

  return (
    <div
      className="menu"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        height: "100px",
        fontSize: '24px',
      }}
      {...rest}
    >
      <div style={{ width: "70%" }}>
        <Link to="/">
          <SpottableMenuComponent text="Home" navigate={() => navigate("/")} />
        </Link>
        <Link to="/movies">
          <SpottableMenuComponent
            text="Movies"
            navigate={() => navigate("/movies")}
          />
        </Link>
        <Link to="/series">
          <SpottableMenuComponent
            text="Series"
            navigate={() => navigate("/series")}
          />
        </Link>
        <Link to="/search">
          <SpottableMenuComponent
            text="Search"
            navigate={() => navigate("/search")}
          />
        </Link>
      </div>
      <div style={{ width: "30%", textAlign: "right" }}>
        <Logo />
      </div>
    </div>
  );
};

export default SpotlightContainerDecorator({ enterTo: "last-focused" }, Menu);
