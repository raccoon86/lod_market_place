import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/detail/:id" element= {<Detail/>} />
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
