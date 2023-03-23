import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import SearchPage from "./layout/SearchPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Search" element={<SearchPage />} />
    </Routes>
  );
};

export default App;
