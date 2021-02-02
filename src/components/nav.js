import {Logo} from './styles.js';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "All Movies",
    href: "/all-movies",
  },
  {
    label: "Blog",
    href: "/#",
  },
  {
    label: "Contact Us",
    href: "/#",
  },
  {
    label: <SearchIcon/>,
    href: "/",
  },
];


const useStyles = makeStyles(() => ({
  header: {
    fontFamily: "Quicksand, sans-serif",
    backgroundColor: "#fcfcfc",
    color: "#000000",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "Quicksand, sans-serif",
    color: "#535353",
    textTransform: "capitalize",
    fontWeight: 400,
    size: "25px",
    marginLeft: "38px",
     "&:hover": {
       color: "#b2497b",
       backgroundColor: "#fcfcfc",
     },
  },
  menuDraws: {
    fontFamily: "Quicksand, sans-serif",
    color: "white",
    width: "100%",
    borderBottom: "0.5px solid #535353",
    fontWeight: 300,
    height: "50px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Quicksand, sans-serif",
  },
  mobiletoolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  toolMenu: {
    marginLeft: "auto",
  },
  drawerContainer: {
    backgroundColor: "#2a2a2a",
    fontFamily: "Quicksand, sans-serif",
    paddingTop: "20px",
    height: "100%",
    width: "400px",
    "@media (max-width: 600px)": {
       width: "250px",
    },
  },
}));

function Nav() {
    const { header,
    menuButton,
    toolbar,
    drawerContainer,
    menuDraws,
    toolMenu ,
    mobiletoolbar} = useStyles();

    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

      useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
      }, []);

      const displayDesktop = () => {
        return (
          <Toolbar className={toolbar}>
            {mmLogo}
            <div>{getMenuButtons()}</div>
          </Toolbar>
        );
      };


      const displayMobile = () => {
        const handleDrawerOpen = () =>
          setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
          setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
          <Toolbar className={mobiletoolbar} >
            <Drawer
              {...{
                anchor: "right",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div className={drawerContainer}>
                <h3 style={{padding: "0px 20px 0px 20px", textAlign: "center", color: "white" }}>MENU</h3>
                {getDrawerChoices()}
              </div>
            </Drawer>

            <div>{mmLogo}</div>
            <IconButton
             className={toolMenu}
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        );
      };

      const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (

            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem
              className={menuDraws} >{label} <ArrowForwardIosIcon  style={{marginLeft: "auto" }} /> </MenuItem>
             </Link>
          );
        });
      };

      const mmLogo = (
        <Typography variant="h6" component="h1" >
          <Logo>
              Martin's Movies
          </Logo>
        </Typography>
      );

    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}



export default Nav;
