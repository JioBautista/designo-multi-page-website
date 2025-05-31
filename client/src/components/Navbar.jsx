import React from "react";
import classes from "../styles/navbar.module.scss";

function Navbar() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <nav className={classes.navbar}>
      <header>
        <img src="/assets/icon.png" />
        <h1>D E S I G N O</h1>
      </header>
      <div>
        <img src="/assets/shared/mobile/icon-hamburger.svg" />
      </div>
    </nav>
  );
}

export default Navbar;
