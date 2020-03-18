import React from "react";
import { Hero } from "./../components/Hero";
import { Banner } from "./../components/Banner";
import { Link } from "react-router-dom";
import Services from "./../components/Services";
import FeaturedRooms from './../components/FeaturedRooms';


export const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="Chambres luxueuses"
          subtitle="Chambres Deluxe Kings à partir de € 180"
        >
          <Link to="/rooms" className="btn-primary">
            {" "}
            Nos chambres
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};
