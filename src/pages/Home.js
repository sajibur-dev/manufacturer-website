import React from "react";
import BussinessSummary from "../components/BussinessSummary";
import Reviews from "../components/Reviews";
import Tools from "../components/Tools";




const Home = () => {
  return (
    <div>
        {/* <Banner/> */}
        <Tools/>
        <BussinessSummary/>
        <Reviews/>
    </div>
  );
};

export default Home;
