import React, { useState } from "react";
import Lower_Navbar from "./Lower_Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import HomeGrid from "./HomeGrid";
import Upper_Navbar from "./Upper_Navbar";
import Div_Guidelines from "./Div_Guidelines";
function ClientProfile() {
  return (
    <div>
      <Upper_Navbar />
      <Lower_Navbar />
      <Carousel />
      <HomeGrid />
      <Div_Guidelines />
      <Footer />
    </div>
  );
}

export default ClientProfile;
