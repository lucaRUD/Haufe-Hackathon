import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import "./App.css";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";


function App() {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000/getdata");

      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <>
      <h1>Haufe Recycling</h1>
      <ul>
        {data.hits.map((item) => (
          <li key={item}></li>
        ))}
      </ul>
      <Map />
    </>
  );
}

export default App;
