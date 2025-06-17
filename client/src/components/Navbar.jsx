import React from "react";
import classes from "../styles/navbar.module.scss";
import { Link } from "react-router";

function Navbar() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <nav className={classes.navbar}>
      <Link to="/">
        <header>
          <img src="/assets/icon.png" />
          <h1>D E S I G N O</h1>
        </header>
      </Link>

      <div>
        <button className={classes.navbutton} onClick={() => setOpen(!isOpen)}>
          <img
            src={`/assets/shared/mobile/icon-${
              isOpen ? "close" : "hamburger"
            }.svg`}
          />
        </button>
      </div>

      {isOpen ? (
        <React.Fragment>
          <div className={classes.sidebar}>
            <Link to="/about" onClick={() => setOpen(!isOpen)}>
              OUR COMPANY
            </Link>
            <Link to="/locations" onClick={() => setOpen(!isOpen)}>
              LOCATIONS
            </Link>
            <Link to="/contact" onClick={() => setOpen(!isOpen)}>
              CONTACT
            </Link>
          </div>
          <div className={classes.overlay}></div>
        </React.Fragment>
      ) : null}
    </nav>
  );
}

export default Navbar;
