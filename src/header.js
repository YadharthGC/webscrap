import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="hpage">
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="home">
            <img src="./images/home.png" />{" "}
            <span style={{ color: "black" }}> Home</span>
          </div>
        </Link>
        <Link to="/amazon" style={{ textDecoration: "none" }}>
          <div className="amazon">
            <img src="./images/amazon.png" />
            <span style={{ color: "black" }}> Amazon</span>
          </div>
        </Link>
        <Link to="/fk" style={{ textDecoration: "none" }}>
          <div className="fk">
            <img src="./images/fk.png" />
            <span style={{ color: "black" }}> Flipkart</span>
          </div>
        </Link>
      </div>
      <div className="homepage">
        <div id="shirtsimage">
          <div>
            <img src="./images/amazon.png" className="simg" />
            <img src="./images/shirt1.png" className="simg" />
            <img src="./images/shirt2.png" className="simg" />
            <img src="./images/shirt3.png" className="simg" />
            <img src="./images/shirt4.png" className="simg" />
            <img src="./images/shirt5.png" className="simg" />
          </div>
          <div style={{ marginTop: "3%" }}>
            Let's Scrap latest stylish shirts from Amazon and cool shoes from
            Flipkart.
          </div>
          <div style={{ marginTop: "3%" }}>
            <img src="./images/s1.png" className="simg" />
            <img src="./images/s2.png" className="simg" />
            <img src="./images/s3.png" className="simg" />
            <img src="./images/s4.png" className="simg" />
            <img src="./images/fk.png" className="simg" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
