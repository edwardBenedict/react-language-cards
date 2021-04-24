import React, { Component } from "react";
import "./App.scss";

import CardComponent from "./card/Card";
import { categories } from "./helpers/data";
import react from "./assets/react.svg";

class ContainerComponent extends Component {
  render() {
    return (
      <>
        <img src={react} className="top-img" alt="reactjs" />
        <section className="menu-container">
          <div className="bars"></div>
          <section className="top">Languages</section>
          <section className="bottom">
            {categories.map((category, index) => {
              return <CardComponent key={index} category={category} />;
            })}
          </section>
        </section>
      </>
    );
  }
}

export default ContainerComponent;
