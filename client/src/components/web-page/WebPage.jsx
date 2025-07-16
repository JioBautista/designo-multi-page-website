import React from "react";
import NavMain from "../NavMain";
import Header from "../Header";
import Cards from "../Cards";
import Card from "../Card";

function WebPage() {
  const contents = [
    {
      img: "/assets/web-design/desktop/image-express.jpg",
      title: "EXPRESS",
      paragraph: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      img: "/assets/web-design/desktop/image-transfer.jpg",
      title: "TRANSFER",
      paragraph:
        "Site for low-cost money transfers and sending money within seconds.",
    },
    {
      img: "/assets/web-design/desktop/image-photon.jpg",
      title: "PHOTON",
      paragraph:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      img: "/assets/web-design/desktop/image-builder.jpg",
      title: "BUILDER",
      paragraph:
        "Connects users with local contractors based on their location",
    },
    {
      img: "/assets/web-design/desktop/image-blogr.jpg",
      title: "BLOGR",
      paragraph:
        "Blogr is a platform for creating an online blog or publication",
    },
    {
      img: "/assets/web-design/desktop/image-camp.jpg",
      title: "CAMP",
      paragraph:
        "Get expert training in coding, data, design and digital marketing",
    },
  ];
  return (
    <main>
      <Header>
        <h1>Web Design</h1>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </Header>

      <Cards>
        {contents?.map((elements) => (
          <React.Fragment>
            <Card elements={elements} />
          </React.Fragment>
        ))}
      </Cards>

      <NavMain />
    </main>
  );
}

export default WebPage;
