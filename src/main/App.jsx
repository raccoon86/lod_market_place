import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';
import Inventory from '../pages/inventory/Inventory';
import Game from '../pages/game/Game';
import MyNFT from '../pages/detail/MyNFTDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/detail/:id" element= {<Detail/>} />
        <Route path = "/inventory" element={<Inventory/>} />
        <Route path = "/inventory/my_nft/detail/:id" element={<MyNFT/>} />
        <Route path = "/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
