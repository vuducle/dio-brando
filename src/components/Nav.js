import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";

function Nav() {
  const style = {
    textDecoration: "none",
    color: "#fff",
    listStyleType: "none",
  };
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link style={style} to="/">
              <HomeOutlinedIcon
                style={{ margin: "0 10px 0 0", alignItems: "center" }}
              />
              Home
            </Link>
          </li>
          <li>
            <Link style={style} to="about">
              <InfoOutlinedIcon />
              About
            </Link>
          </li>
          <li>
            <Link style={style} to="contact">
              <PermContactCalendarOutlinedIcon />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
