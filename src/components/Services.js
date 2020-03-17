import React, { Component } from "react";
import { Title } from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icons: <FaCocktail />,
        title: "Free Coctails",
        info:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consequuntur."
      },
      {
        icons: <FaHiking />,
        title: "Endless Hiking",
        info:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consequuntur."
      },
      {
        icons: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consequuntur."
      },
      {
        icons: <FaBeer />,
        title: "Strongest Beer",
        info:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consequuntur."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icons}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
