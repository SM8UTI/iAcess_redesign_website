import React from "react";
import About from "../Components/About";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Search from "../Components/Search";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Search />
      <About />
      <div style={{ height: "100vh" }}></div>
    </>
  );
};

export default Home;
