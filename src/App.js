import {React, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import Home from "./Home";
import OrderPizza from "./PizzaForm";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <div>
            <h1>Bloomtech Eats</h1>
            <p>Where food for thought is one correct syntax away</p>
          </div>
          <nav className="nav">
            <div className="nav_links">
              <Link to='/' >Home</Link>
              <Link to=''>Help</Link>
            </div>
          </nav>
        </div>

        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path="" element={<Home/>}/>
            <Route path="/pizza" element={<OrderPizza />}/>
        </Routes> 
      </div>
    </BrowserRouter>
    
      
  );
};
export default App;
