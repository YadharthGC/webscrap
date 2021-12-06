import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Fk() {
  const [list, setlist] = useState([]);
  const [load, setload] = useState(true);

  useEffect(async () => {
    try {
      let products = await axios.get("https://yadharthfkscrap.herokuapp.com/");
      setlist([...products.data]);
      setload(false);
    } catch (error) {
      setload(false);
    }
  }, []);

  return (
    <div className="hpage" style={{ height: "100%" }}>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="home">
            <img src="./images/home.png" />
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
      <hr />
      <div className="title">Flipkart Shoes</div>
      {load ? (
        <h3>Loading...</h3>
      ) : (
        <div id="qwerty">
          {list.map((obj) => {
            return (
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      src={obj.srcs}
                      sx={{ bgcolor: red[500] }}
                      aria-label="recipe"
                    ></Avatar>
                  }
                  title={obj.name}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={obj.srcs}
                  alt="Paella dish"
                ></CardMedia>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <div className="ans">
                      <span className="key">Model: </span>
                      {obj.type}
                    </div>
                    <div className="ans">
                      <span className="key">Price: </span>
                      {obj.price}
                    </div>
                    <div className="ans">
                      <span className="key">Discount: </span>
                      {obj.offers}
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Fk;
