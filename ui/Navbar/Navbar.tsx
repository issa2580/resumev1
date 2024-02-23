import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Logo from "../../src/assets/logo.png";

import "../../src/index.css";

import React, { useState } from "react";

import { Button, Link } from "@mui/material";

const pages = [
  {
    id: "01",
    title: ".About",
    link: "about",
  },
  {
    id: "02",
    title: ".Experiences",
    link: "experience",
  },
  {
    id: "03",
    title: ".Works",
    link: "work",
  },
  {
    id: "04",
    title: ".Contact",
    link: "contact",
  },
];

const customHoverStyle = {
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "rotate(360deg)",
  },
} as const;

const hoverSpanStyle = {
  fontSize: "15px",
  "&:hover": {
    color: "whitesmoke",
  },
} as const;

// const handleDownload = () => {
//   const fileUrl =
//     import.meta.env.BASE_URL + "/resume/Issa_Diop_Developpeur_Full_Stack.pdf";
//   const link = document.createElement("a");
//   link.href = fileUrl;
//   link.download = "resume.pdf";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

const handleDownload = () => {
  const fileUrl =
    "https://drive.google.com/file/d/10rm3OYT6UPCVkHCveq30t0ugLg0C9s7v/view?usp=sharing";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Issa_Diop_Developpeur_Full_Stack.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<EventTarget | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#0a192f",
        height: "80px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link sx={{ textDecoration: "none" }} href="#home">
            <Box sx={{ ...customHoverStyle }}>
              <img
                src={Logo}
                alt="issa"
                width={50}
                height={50}
                className="customImage"
              />
            </Box>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="my portfolio"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{
                display: { xs: "block", md: "none" },
              }}
              id="menu-appbar"
              anchorEl={anchorElNav as Element | null}
              keepMounted
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <span
                    style={{
                      fontFamily: "Edu TAS Beginner",
                      color: "#233554",
                    }}
                  >
                    {page.id}
                  </span>
                  <Link sx={{ textDecoration: "none" }} href={`#${page.link}`}>
                    <Typography
                      sx={{
                        fontFamily: "Edu TAS Beginner",
                        color: "#233554",
                        fontSize: "15px",
                        textTransform: "capitalize",
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "center", md: "center" },
              alignItems: { xs: "center", md: "center" },
            }}
          >
            {pages.map((page, index) => (
              <Button
                sx={{
                  color: "whitesmoke",
                  display: "flex",
                  padding: "0 15px",
                }}
                key={index}
                onClick={handleCloseNavMenu}
              >
                <span
                  style={{
                    fontFamily: "Edu TAS Beginner",
                    color: "#64ffda",
                    ...hoverSpanStyle,
                  }}
                >
                  {page.id}
                </span>
                <Link sx={{ textDecoration: "none" }} href={`#${page.link}`}>
                  <Typography
                    sx={{
                      fontFamily: "Edu TAS Beginner",
                      color: "whitesmoke",
                      fontSize: "15px",
                      textTransform: "capitalize",
                      "&:hover": {
                        color: "#64ffda",
                      },
                    }}
                  >
                    {page.title}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
          <Button
            onClick={handleDownload}
            sx={{
              color: "#64ffda",
              display: "flex",
              border: "1px solid",
              borderWidth: "2px",
              padding: "10px",
              width: "100px",
              "&:hover": {
                borderColor: "#64ffda",
                margin: "0 auto 5px",
                width: "100px",
                boxShadow: "5px 5px 0 0 #64ffda",
                color: "whitesmoke",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Edu TAS Beginner",
                textTransform: "capitalize",
              }}
            >
              Resume
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
