import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: "#24258d",
          borderRadius: 15,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 50px",
          width: "93%",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          style={{ color: "white" }}
        >
          CoCode
        </IconButton>
        <Link to="/home" style = {{textDecoration:"none"}}>
          <Button color="success" variant="contained">
            CREATE/JOIN ROOM
          </Button>
        </Link>
      </AppBar>
    </div>
  );
};

export default Navbar;
