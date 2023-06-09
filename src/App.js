import {React, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Bloomtech Eats</h1>
        <p>Where food for thought is one correct syntax away</p>
        <nav className="nav">
            <div className="nav_links">
              <Link to='/' >Home</Link>
            </div>
        </nav>
        <Routes>
            <Route path='/'element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
      
  );
};
export default App;
