import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Query from "./components/Query";
import { About } from "./components/About";
import { Learn } from "./components/Learn";
import { Abcd } from "./components/Abcd";
import { Create } from "./components/Create";
import Home from "./pages/Home";

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} /> 
          <Route path="/query" element={<Query/>} />
          <Route path="/Learn" element={<Learn/>} /> 
          <Route path="/abcd" element={<Abcd/>} />
          <Route path="/create" element={<Create/>} /> 
        </Routes>
      </AuthProvider>
    </Router>
  );
};
