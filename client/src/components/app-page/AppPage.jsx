import React from "react";
import NavMain from "../NavMain";
import Header from "../Header";
import Cards from "../Cards";
import Card from "../Card";

function AppPage() {
  const contents = [
    {
      img: "/assets/app-design/desktop/image-airfilter.jpg",
      title: "AIRFILTER",
      paragraph:
        "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      img: "/assets/app-design/desktop/image-eyecam.jpg",
      title: "EYECAM",
      paragraph:
        "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      img: "/assets/app-design/desktop/image-faceit.jpg",
      title: "FACEIT",
      paragraph:
        "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      img: "/assets/app-design/desktop/image-todo.jpg",
      title: "TODO",
      paragraph: "A todo app that features cloud sync with light and dark mode",
    },
    {
      img: "/assets/app-design/desktop/image-loopstudios.jpg",
      title: "LOOPSTUDIOS",
      paragraph: "A VR experience app made for Loopstudios",
    },
  ];
  return (
    <main>
      <Header>
        <h1>App Design</h1>
        <p>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
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

export default AppPage;
