import Container from "@mui/material/Container";
import heroimg from "../../../assets/CoCode.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  };
  return (
    <div className="hero">
      <Container style={containerStyles}>
        <div className="text">
          <Typography
            variant="h2"
            component="div"
            style={{
              color: "#23272A",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "white"
            }}
            className = "Heading"
          >
            Code along with<br/>your friends and batchmates
          </Typography>
          <small style={{ color: "grey" }}>
            Peer coding made easy and handy.
          </small>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            className="btns"
          >
            <Button href = "/home" variant="contained" >Create/Join Private Room</Button>
            <Button href = "/room/public-room" variant="outlined" style = {{color: "white"}}>Login as Guest</Button>
          </div>
        </div>
        <div className="Image">
          <img src={heroimg} alt="Hero" width = "600px"/>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
