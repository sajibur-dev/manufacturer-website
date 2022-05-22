import React from "react";
import BussinessSummary from "../components/BussinessSummary";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Tools from "../components/Tools";




const Home = () => {
  return (
    <div>
        {/* <Banner/> */}
        <Tools/>
        <BussinessSummary/>
        <Reviews/>
        <Services/>
    </div>
  );
};

export default Home;
