import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Inventory from "../pages/inventory/Inventory";
import Game from "../pages/game/Game";
import MyNFT from "../pages/detail/MyNFTDetail";
import MyNFTList from "../pages/detail/MyNFTListDetail";
import NotFound from "../pages/errors/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/my_nft/detail/:id" element={<MyNFT />} />
        <Route
          path="/inventory/my_nft_list/detail/:id"
          element={<MyNFTList />}
        />
        <Route path="/game" element={<Game />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
