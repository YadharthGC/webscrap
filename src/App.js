import "./App.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./header";
import Amazon from "./amazon";
import Fk from "./fk";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} exact={true} />
          <Route path="/amazon" element={<Amazon />} exact={true} />
          <Route path="/fk" element={<Fk />} exact={true} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
