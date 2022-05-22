import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routers from './routes/Routers';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routers/>
      <Footer/>
    </div>
  );
};

export default App;