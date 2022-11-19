import React from "react"
import './App.css';
import Home from "../home/Home"
import Article from "../article/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article" element={<Article />}></Route>
      </Routes>
    </BrowserRouter>
  )
}