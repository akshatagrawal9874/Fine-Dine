import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Menu_order from "../Menu/menu_order"
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#FFCC63'
  },
  menuItem: {
    marginRight: "15px",
    fontSize: "18px",
    cursor: "pointer",
  },
  home: {
    cursor: "pointer",
  },
}));

export default function Header() {
  const classes = useStyles();

  const handleLogout = () => {
    localStorage.setItem("x-access-token", "");
    window.open("/", "_self");
  };
  return (
    <div>
       <div style={{background:"url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"}}>
        
        </div>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        <Typography
          variant="h5"
          className={classes.title}
          noWrap
          onClick={() => {
            window.open("/order", "_self");
          }}
        >
          Fine-Dine
        </Typography>
        <Typography
          className={classes.menuItem}
          onClick={() => {
            window.open("/menu", "_self");
          }}
        >
          Menu
        </Typography>
        <Typography
          className={classes.menuItem}
          onClick={() => {
            window.open("/order", "_self");
          }}
        >
          Orders
        </Typography>
        {localStorage.getItem("x-access-token") && (
          <Typography className={classes.menuItem} onClick={handleLogout}>
            Logout
          </Typography>
         
        )}
      </Toolbar>
    </AppBar>
   
    </div>
  );
}
