import styles from "../../styles/locations-page/locationspage.module.scss";

function LocationsPage() {
  return (
    <main className={styles.cards}>
      {/* CANADA SECTION */}
      <section>
        <img
          src="/assets/locations/desktop/image-map-canada.png"
          width={"100%"}
        />
        <div className={styles.card}>
          <h1>Canada</h1>
          <div>
            <h4>Designo Central Office</h4>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>P : 1+ 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
        </div>
      </section>

      {/* AUSTRALIA SECTION */}
      <section>
        <img
          src="/assets/locations/desktop/image-map-australia.png"
          width={"100%"}
        />
        <div className={styles.card}>
          <h1>Australia</h1>
          <div>
            <h4>Designo AU Office</h4>
            <p>19 Balonne Street</p>
            <p>New South Wales 2443</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>P : (02) 6720 9092</p>
            <p>M : contact@designo.au</p>
          </div>
        </div>
      </section>

      {/* UNITED KINGDOM SECTION */}
      <section>
        <img
          src="/assets/locations/desktop/image-map-united-kingdom.png"
          width={"100%"}
        />
        <div className={styles.card}>
          <h1>United Kingdom</h1>
          <div>
            <h4>Designo UK Office</h4>
            <p>13 Colorado Way</p>
            <p>Rhyd-y-fro SA8 9GA</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>P : 078 3115 1400</p>
            <p>M : contact@designo.uk</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LocationsPage;
