import React from "react";
import { Link } from "react-router";
import styles from "../styles/locations.module.css";

function Locations() {
  const contents = [
    {
      img: "/assets/shared/desktop/illustration-canada.svg",
      location: "CANADA",
      href: "/locations",
    },
    {
      img: "/assets/shared/desktop/illustration-australia.svg",
      location: "AUSTRALIA",
      href: "/locations",
    },
    {
      img: "/assets/shared/desktop/illustration-united-kingdom.svg",
      location: "UNITED KINGDOM",
      href: "/locations",
    },
  ];
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }
  return (
    <section>
      <div className={styles.cards}>
        {contents?.map((elements) => (
          <React.Fragment>
            <div className={styles.card}>
              <img src={elements.img} className={styles.image} />
              <h1 className={styles.title}>{elements.location}</h1>
              <Link to={elements.href}>
                <button className={styles.button} onClick={scrollToTop}>
                  SEE LOCATION
                </button>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Locations;
