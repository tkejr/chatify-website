import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Header from "../Components/Header";

import React, { useState } from "react";
import axios from "axios";
import "./../App.css";

function Landing() {
  return (
    <>
      <main
        id="MainContent"
        className="flex flex-col outline-none"
        tabIndex={-1}
      >
        <Header />
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default Landing;
