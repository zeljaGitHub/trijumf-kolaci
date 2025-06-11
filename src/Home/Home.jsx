import React from "react";
import Video from "./Video";
import Linija from "./Linija";
import ImageSlider from "./ImageSlider";
import Gallery from "./Gallery";
import Info from "./Info";
import Clients from "./Clients";

const Home = () => {
  return (
    <div className="container">
      <Video />
      <Linija />
      <ImageSlider />
      <Gallery />
      <Linija />
      <Info />
      <Clients />
    </div>
  );
};

export default Home;
