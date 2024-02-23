import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TypewriterComponent from "typewriter-effect";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link } from "@mui/material";

const heading = {
  fontFamily: "Edu TAS Beginner",
  fontWeight: 900,
  fontStyle: "normal",
} as const;

const Home = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: "50px", md: "100px" },
        minHeight: { xs: "80vh", md: "60vh", lg: "95vh" },
        gap: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{
            ...heading,
            fontSize: { xs: "30px", md: "50px" },
          }}
        >
          Hi There!{" "}
        </Typography>
        <Box
          component="div"
          sx={{
            fontSize: { xs: "20px", md: "50px" },
          }}
        >
          👋
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{
            ...heading,
            fontSize: { xs: "30px", md: "50px" },
          }}
        >
          I am Rootkit{" "}
        </Typography>
        <Box
          component="div"
          sx={{
            fontSize: { xs: "20px", md: "50px" },
          }}
        >
          🤷‍♂️
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{
            ...heading,
            fontSize: { xs: "20px", md: "50px" },
          }}
        >
          Fullstack web developer living in{" "}
        </Typography>
        <Box
          component="div"
          sx={{
            pt: 1,
            fontSize: { xs: "20px", md: "50px" },
          }}
        >
          🇸🇳
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            ...heading,
            color: "#64ffda",
            fontSize: { xs: "20px", md: "50px" },
          }}
        >
          <TypewriterComponent
            options={{
              strings: [
                "Software Developer 👨‍💻",
                "MERN Stack Developer 👨‍💻",
                "Python Django Developer 👨‍💻",
                "Open Source Contributor 👨‍💻",
                "Freelancer 👨‍💻",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </Typography>
      </Box>
      <Box sx={{ pt: "50px" }}>
        <Button
          sx={{
            color: "#64ffda",
            display: "flex",
            border: "1px solid",
            borderWidth: "2px",
            padding: "10px",
            width: "200px",
            "&:hover": {
              color: "whitesmoke",
              borderColor: "#64ffda",
              margin: "0 auto 5px",
              width: "200px",
              boxShadow: "5px 5px 0 0 #64ffda",
            },
          }}
        >
          <Link
            sx={{ textDecoration: "none" }}
            href="https://rootkit-five.vercel.app/"
            target="_blank"
          >
            <Typography
              sx={{
                fontFamily: "Edu TAS Beginner",
                textTransform: "capitalize",
                color: "#64ffda",
              }}
            >
              Check out my blog
            </Typography>
          </Link>
        </Button>
      </Box>
      <Link sx={{ textDecoration: "none" }} href="#about">
        <Box
          className={`arrow-container ${showArrow ? "show" : ""}`}
          sx={{
            position: "relative",
            marginTop: "50px",
            cursor: "pointer",
            transition: "opacity 0.3s ease",
          }}
          onClick={() => {
            //  tst
          }}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{
              fontSize: "75px",
              color: "#64ffda",
              animation: "bounce 1s infinite",
            }}
          />
        </Box>
      </Link>
    </Box>
  );
};

export default Home;
