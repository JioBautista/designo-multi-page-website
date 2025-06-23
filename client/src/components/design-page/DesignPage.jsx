import React from "react";
import NavMain from "../NavMain";
import Header from "../Header";
import Cards from "../Cards";
import Card from "../Card";

function DesignPage() {
  const contents = [
    {
      img: "/assets/graphic-design/desktop/image-change.jpg",
      title: "TIM BROWN",
      paragraph: "A book cover designed for Tim Brown's new release, 'Change'",
    },
    {
      img: "/assets/graphic-design/desktop/image-boxed-water.jpg",
      title: "BOXED WATER",
      paragraph: "A simple packaging concept made for Boxed Water",
    },
    {
      img: "/assets/graphic-design/desktop/image-science.jpg",
      title: "SCIENCE!",
      paragraph: "A poster made in collaboration with the Federal Art Project",
    },
  ];
  return (
    <main>
      <Header>
        <h1>Graphic Design</h1>
        <p>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </Header>
      <Cards>
        {contents?.map((elements) => (
          <React.Fragment>
            <Card elements={elements} />
          </React.Fragment>
        ))}
      </Cards>
      <div style={{ marginBottom: "7rem" }}>
        <NavMain />
      </div>
    </main>
  );
}

export default DesignPage;
