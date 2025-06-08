import React from "react";
import Video from "./Video";
import ImageSlider from "./ImageSlider";
import Gallery from "./Gallery";
import Info from "./Info";
import Clients from "./Clients";

const Home = () => {
  return (
    <div className="container">
      <Video />
      <ImageSlider />
      <Gallery />
      <Info />
      <Clients />
    </div>
  );
};

export default Home;
