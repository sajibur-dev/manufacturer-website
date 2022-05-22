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
        <Services/>
        <Reviews/>
        <BussinessSummary/>
    </div>
  );
};

export default Home;
