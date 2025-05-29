import React from "react";
import classes from "../styles/navbar.module.scss";

function Navbar() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className={classes.navbar}>
      <img src="/assets/icon.png" />
      <h1>D E S I G N O</h1>
      <div>
        <img src="/assets/shared/mobile/icon-hamburger.svg" />
      </div>
    </div>
  );
}

export default Navbar;
