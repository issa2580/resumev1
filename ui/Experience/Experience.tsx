import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import "../../src/index.css";

const formations = [
  {
    icon: <SchoolSharpIcon />,
    title: "Administration Reseaux & Systemes",
    date: "2020 - 2021",
    university: "Optique LAN Center",
  },
  {
    icon: <SchoolSharpIcon />,
    title: "Licence Professionel en Reseaux Informatique",
    date: "2019 - 2020",
    university: "Institut Superieur dInformatique",
  },
  {
    icon: <SchoolSharpIcon />,
    title: "Diplome de Technicien Superieur",
    date: "2018 - 2019",
    university: "Institut Superieur dInformatique",
  },
];

const certificates = [
  {
    icon: <WorkspacePremiumIcon />,
    title: "Developpement web frontend",
    date: "2023 - 2024",
    university: "ForceN",
  },
  {
    icon: <WorkspacePremiumIcon />,
    title: "Developpement Web Mobile",
    date: "2021 - 2022",
    university: "Xarala Accademy",
  },
  {
    icon: <WorkspacePremiumIcon />,
    title: "HTML CSS JS PHP",
    date: "2020 - 2021",
    university: "Sololearn plateform",
  },
];

const experiences = [
  {
    icon: <BusinessCenterSharpIcon />,
    title: "Prestataire de service",
    date: "07-08-2023 - 31-01-2023",
    university: "Xarala Accademy",
    describe:
      "j'ai travaillé sur le développement d'applications web et mobile, tout en collaborant efficacement au sein de l'équipe.",
  },
  {
    icon: <BusinessCenterSharpIcon />,
    title: "Stagiaire",
    date: "02-11-202 - 31-07-2023",
    university: "Xarala Accademy",
    describe:
      "j'ai intégré des maquettes, développé des fonctionnalités, assuré la maintenance des applications et assisté les apprenants dans la réalisation de leurs projets.",
  },
];

const Experience = () => {
  const [clickedTab, setClickedTab] = React.useState(0);

  return (
    <Box id="experience" sx={{ minHeight: "auto", pb: "100px" }}>
      <Container>
        {/* Box title */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#64ffda",
              fontWeight: 900,
              fontFamily: "Edu TAS Beginner",
            }}
          >
            02.
          </span>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "32px" },
              textTransform: "capitalize",
              fontWeight: 900,
              fontFamily: "Edu TAS Beginner",
              whiteSpace: "nowrap",
            }}
          >
            Where I’ve Worked
          </Typography>
          <Divider
            sx={{
              width: { xs: "50px", md: "200px" },
              height: 0.1,
              border: "1px solid #64ffda",
            }}
          />
        </Box>

        {/* Box education */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: "50px",
          }}
        >
          <Tabs
            value={clickedTab}
            onChange={(_, newValue) => setClickedTab(newValue)}
            orientation="vertical"
            sx={{ borderRight: 5, borderColor: "divider" }}
          >
            <Tab
              sx={{
                color: clickedTab === 0 ? "#64ffda" : "#ffffff",
                fontWeight: 900,
                fontFamily: "Edu TAS Beginner",
                textTransform: "capitalize",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-3px)",
                  color: "#64ffda",
                  fontSize: "20px",
                },
              }}
              label="Formations"
            />
            <Tab
              sx={{
                color: clickedTab === 0 ? "#64ffda" : "#ffffff",
                fontWeight: 900,
                fontFamily: "Edu TAS Beginner",
                textTransform: "capitalize",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-3px)",
                  color: "#64ffda",
                  fontSize: "20px",
                },
              }}
              label="Certificates"
            />
            <Tab
              sx={{
                color: "#ffffff",
                fontWeight: 900,
                fontFamily: "Edu TAS Beginner",
                textTransform: "capitalize",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-3px)",
                  color: "#64ffda",
                  fontSize: "20px",
                },
              }}
              label="Experiences"
            />
          </Tabs>
          <Box>
            {clickedTab === 0 &&
              formations.map((formation, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    textAlign: { xs: "center", md: "center" },
                    justifyContent: { xs: "center", md: "center" },
                    alignItems: { xs: "center", md: "center" },
                  }}
                >
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      background: "#64ffda",
                      borderRadius: "50%",
                      color: "#0a192f",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: { xs: "0 40px", md: "0" },
                    }}
                  >
                    <Typography variant="h6">{index + 1}</Typography>
                  </Box>
                  <Timeline
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: "15px", md: "18px" },
                            textTransform: "capitalize",
                            fontWeight: 600,
                            fontFamily: "Edu TAS Beginner",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {formation.title}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          style={{
                            whiteSpace: "nowrap",
                            fontFamily: "Edu TAS Beginner",
                          }}
                        >
                          {formation.university}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="success" />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          style={{
                            whiteSpace: "nowrap",
                            fontFamily: "Edu TAS Beginner",
                          }}
                        >
                          {formation.date}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Box>
              ))}
            {clickedTab === 1 &&
              certificates.map((certificate, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    textAlign: { xs: "center", md: "center" },
                    justifyContent: { xs: "center", md: "center" },
                    alignItems: { xs: "center", md: "center" },
                  }}
                >
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      background: "#64ffda",
                      borderRadius: "50%",
                      color: "#0a192f",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: { xs: "0 40px", md: "0" },
                    }}
                  >
                    <Typography variant="h6">{index + 1}</Typography>
                  </Box>
                  <Timeline
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: "15px", md: "18px" },
                            textTransform: "capitalize",
                            fontWeight: 600,
                            fontFamily: "Edu TAS Beginner",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {certificate.title}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          style={{
                            whiteSpace: "nowrap",
                            fontFamily: "Edu TAS Beginner",
                          }}
                        >
                          {certificate.university}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="success" />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          style={{
                            whiteSpace: "nowrap",
                            fontFamily: "Edu TAS Beginner",
                          }}
                        >
                          {certificate.date}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Box>
              ))}

            {clickedTab === 2 &&
              experiences.map((experience, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    textAlign: { xs: "start", md: "center" },
                    justifyContent: { xs: "start", md: "center" },
                    alignItems: { xs: "start", md: "center" },
                  }}
                >
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      background: "#64ffda",
                      borderRadius: "50%",
                      color: "#0a192f",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: { xs: "0 40px", md: "0" },
                    }}
                  >
                    <Typography variant="h6">{index + 1}</Typography>
                  </Box>
                  <Timeline
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "18px",
                            textTransform: "capitalize",
                            fontWeight: 600,
                            fontFamily: "Edu TAS Beginner",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {experience.title}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          style={{
                            whiteSpace: "nowrap",
                            fontFamily: "Edu TAS Beginner",
                          }}
                        >
                          {experience.university}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="success" />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          style={{
                            whiteSpace: "nowrap",
                            fontFamily: "Edu TAS Beginner",
                          }}
                        >
                          {experience.date}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Box>
              ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
