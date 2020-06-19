import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

function Nav() {
  const style = {
    textDecoration: "none",
    listStyleType: "none",
    color: "#333",
    textTransform: "uppercase",
    fontWeight: "bold",
  };

  const iconStyle = {
    // margin: " 20px 0 0",
    // padding: "0",
    float: "left",
    marginRight: "10px",
  };

  function changeColor(e) {
    e.target.style.color = "#fff";
  }

  function onLeave(e) {
    e.target.style.color = "#333";
  }

  // const isactive = usemediaquery("(max-width: 1024px");
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              onMouseEnter={changeColor}
              onMouseLeave={onLeave}
              style={style}
              to="/"
            >
              <HomeOutlinedIcon style={iconStyle} />
              Home
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={changeColor}
              onMouseLeave={onLeave}
              style={style}
              to="about"
            >
              <InfoOutlinedIcon style={iconStyle} />
              About
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={changeColor}
              onMouseLeave={onLeave}
              style={style}
              to="contact"
            >
              <PermContactCalendarOutlinedIcon style={iconStyle} />
              Contact
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={changeColor}
              onMouseLeave={onLeave}
              style={style}
              to="login"
            >
              <VpnKeyIcon style={iconStyle} />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
