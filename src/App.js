import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routers from "./routes/Routers";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routers />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
