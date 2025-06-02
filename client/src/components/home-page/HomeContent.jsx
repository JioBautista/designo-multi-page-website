import styles from "../../styles/home-page/home-content.module.scss";
function HomeContent() {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <img src="/assets/home/desktop/illustration-passionate.svg" />
        <h1>PASSIONATE</h1>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that server a purpose. We merge art, design, and
          technology into exciting solutions.
        </p>
      </section>

      <section>
        <img src="/assets/home/desktop/illustration-resourceful.svg" />
        <h1>RESOURCEFUL</h1>
        <p>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients' needs.
        </p>
      </section>

      <section>
        <img src="/assets/home/desktop/illustration-friendly.svg" />
        <h1>FRIENDLY</h1>
        <p>
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company provide.
        </p>
      </section>
    </div>
  );
}

export default HomeContent;
