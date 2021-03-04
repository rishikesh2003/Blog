import * as React from "react";
import { Link } from "react-router-dom";

const NavBox = (props) => {
  const navLinkObj = [
    { id: 1, name: "Home", to: "/", color: "black" },
    { id: 2, name: "Topics", to: "/topics", color: "black" },
    { id: 3, name: "Subscribe", to: "/subscribe", color: "blue" },
    { id: 4, name: "Contact", to: "/contact", color: "black" },
  ];
  return (
    <div className="nav-box">
      {navLinkObj.map((item) => {
        return (
          <div key={item.id} className="nav-link-container">
            <Link
              style={{ color: item.color }}
              className="nav-link"
              onClick={() => {
                props.setBackdrop("");
                props.setNavBox("");
                props.setNavBoxBool((bool) => {
                  return !bool;
                });
              }}
              to={item.to}
            >
              <p>{item.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavBox;
