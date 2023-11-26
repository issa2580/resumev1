import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp'
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

import '../../src/index.css'
import { Tab, Tabs } from '@mui/material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'


  const formations = [
    {
      icon: <SchoolSharpIcon />,
      title: "Licence Professionel en Reseaux Informatique",
      date: '2019 - 2020',
      university: 'Institut Superieur dInformatique',
    },
    {
      icon: <SchoolSharpIcon />,
      title: 'Diplome de Technicien Superieur',
      date: '2018 - 2019',
      university: 'Institut Superieur dInformatique',
    },
    {
      icon: <SchoolSharpIcon />,
      title: 'Baccalaureat',
      date: '2015 - 2016',
      university: 'Lycee de Thiaroye',
    },
  ]

  const certificates = [
    {
      icon: <WorkspacePremiumIcon />,
      title: 'Developpement Web Mobile',
      date: '2021 - 2022',
      university: 'Xarala Accademy',
    },
    {
      icon: <WorkspacePremiumIcon />,
      title: 'Administration Reseaux & Systemes',
      date: '2020 - 2021',
      university: 'Optique LAN Center',
    },
    {
      icon: <WorkspacePremiumIcon />,
      title: 'HTML CSS JAVASCRIPT PHP RESPONSDESIGN',
      date: '2020 - 2021',
      university: 'Sololearn plateform',
    }
  ]

  const experiences = [
    {
      icon: <BusinessCenterSharpIcon />,
      title: 'Prestataire de service',
      date: '07--8-2023 - 31-10-2023',
      university: 'Xarala Accademy',
      describe: "j'ai travaillé sur le développement d'applications web et mobile, tout en collaborant efficacement au sein de l'équipe."
    },
    {
      icon: <BusinessCenterSharpIcon />,
      title: 'Stagiaire',
      date: '02-11-202 - 31-07-2023',
      university: 'Xarala Accademy',
      describe: "j'ai intégré des maquettes, développé des fonctionnalités, assuré la maintenance des applications et assisté les apprenants dans la réalisation de leurs projets."
    }
  ];



const Experience = () => {
    const [clickedTab, setClickedTab] = React.useState(1)

    return (
        <Box 
          id='experience'
          sx={{minHeight: 'auto', pb: '100px'}}>
            <Container>
                {/* Box title */}
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        textAlign: 'center'
                    }}>
                    <span
                        style={{
                            fontSize: '20px',
                            color: '#64ffda',
                            fontWeight: 900,
                            fontFamily: 'Edu TAS Beginner',
                        }}>
                            02.
                    </span>
                    <Typography
                        sx={{
                            fontSize:{xs: '20px', md: '32px'},
                            textTransform: 'capitalize',
                            fontWeight: 900,
                            fontFamily: 'Edu TAS Beginner',
                            whiteSpace: 'nowrap',
                        }}>
                            Where I’ve Worked
                    </Typography>
                    <Divider 
                        sx={{
                            width:{xs: '110px', md: '200px'},
                            height: 0.1, 
                            border: '1px solid #64ffda',
                        }} 
                    />
                </Box>

                {/* Box education */}
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection:{xs: 'column', md: 'row',},
                    gap: '50px',
                  }}>
                  <Tabs
                    value={clickedTab}
                    onChange={(event, newValue) => setClickedTab(newValue)}
                    orientation="vertical"
                    sx={{ borderRight: 5, borderColor: 'divider'}}>
                    <Tab 
                      sx={{
                        color: clickedTab === 0 ? '#64ffda' : '#ffffff',
                        fontWeight: 900,
                        fontFamily: 'Edu TAS Beginner',
                        textTransform: 'capitalize',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          color: '#64ffda',
                          fontSize: '20px',
                        }
                      }}
                      label="Formations" />
                      <Tab 
                        sx={{
                          color: clickedTab === 0 ? '#64ffda' : '#ffffff',
                          fontWeight: 900,
                          fontFamily: 'Edu TAS Beginner',
                          textTransform: 'capitalize',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            color: '#64ffda',
                            fontSize: '20px',
                          }
                        }}
                        label="Certificates" />
                      <Tab
                        sx={{
                          color: '#ffffff',
                          fontWeight: 900,
                          fontFamily: 'Edu TAS Beginner',
                          textTransform: 'capitalize',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            color: '#64ffda',
                            fontSize: '20px',
                          }
                        }}
                        label="Experiences" />
                    </Tabs>
                    <Box>
                      {clickedTab === 0 &&
                        formations.map((formation, index) => (
                          <Box
                            sx={{
                              display:'flex',
                              flexDirection: {xs: 'column', md: 'row'},
                              textAlign: {xs: 'start', md: 'center'},
                              justifyContent: {xs: 'start', md: 'center'},
                              alignItems: {xs: 'start', md: 'center'},
                            }}>
                            <Box 
                              sx={{
                                width:'30px',
                                height: '30px',
                                background: '#64ffda',
                                borderRadius: '50%',
                                color: '#0a192f',
                                display:'flex',
                                textAlign:'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: {xs: '0 40px', md: '0'}
                              }}>
                                <Typography variant="h6">{index + 1}</Typography>
                            </Box>
                              <Timeline sx={{
                                display: 'flex',
                                textAlign: 'start',
                                justifyContent: 'start',
                                alignItems: 'start',
                              }}>
                                <TimelineItem>
                                  <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    <TimelineConnector />
                                  </TimelineSeparator>
                                  <TimelineContent>
                                    <Typography 
                                      variant="h6"
                                      style={{
                                        fontSize: '18px',
                                        textTransform: 'capitalize',
                                        fontWeight: 600,
                                        fontFamily: 'Edu TAS Beginner',
                                        whiteSpace: 'nowrap',
                                      }}>
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
                                        whiteSpace: 'nowrap',
                                        fontFamily: 'Edu TAS Beginner',
                                      }}>
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
                                        whiteSpace: 'nowrap',
                                        fontFamily: 'Edu TAS Beginner',
                                      }}>
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
                                display:'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                textAlign: {xs: 'start', md: 'center'},
                                justifyContent: {xs: 'start', md: 'center'},
                                alignItems: {xs: 'start', md: 'center'},
                              }}>
                              <Box 
                                sx={{
                                  width:'30px',
                                  height: '30px',
                                  background: '#64ffda',
                                  borderRadius: '50%',
                                  color: '#0a192f',
                                  display:'flex',
                                  textAlign:'center',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  margin: {xs: '0 40px', md: '0'}
                                }}>
                                <Typography variant="h6">{index + 1}</Typography>
                              </Box>
                              <Timeline sx={{
                                display: 'flex',
                                textAlign: 'start',
                                justifyContent: 'start',
                                alignItems: 'start',
                              }}>
                                <TimelineItem>
                                  <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    <TimelineConnector />
                                  </TimelineSeparator>
                                  <TimelineContent>
                                    <Typography 
                                      variant="h6"
                                      style={{
                                        fontSize: '18px',
                                        textTransform: 'capitalize',
                                        fontWeight: 600,
                                        fontFamily: 'Edu TAS Beginner',
                                        whiteSpace: 'nowrap',
                                      }}>
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
                                        whiteSpace: 'nowrap',
                                        fontFamily: 'Edu TAS Beginner',
                                      }}>
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
                                        whiteSpace: 'nowrap',
                                        fontFamily: 'Edu TAS Beginner',
                                      }}>
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
                                display:'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                textAlign: {xs: 'start', md: 'center'},
                                justifyContent: {xs: 'start', md: 'center'},
                                alignItems: {xs: 'start', md: 'center'},
                              }}>
                              <Box 
                                sx={{
                                  width:'30px',
                                  height: '30px',
                                  background: '#64ffda',
                                  borderRadius: '50%',
                                  color: '#0a192f',
                                  display:'flex',
                                  textAlign:'center',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  margin: {xs: '0 40px', md: '0'}
                                }}>
                                <Typography variant="h6">{index + 1}</Typography>
                              </Box>
                              <Timeline sx={{
                                display: 'flex',
                                textAlign: 'start',
                                justifyContent: 'start',
                                alignItems: 'start',
                              }}>
                                <TimelineItem>
                                  <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    <TimelineConnector />
                                  </TimelineSeparator>
                                  <TimelineContent>
                                    <Typography 
                                      variant="h6"
                                      style={{
                                        fontSize: '18px',
                                        textTransform: 'capitalize',
                                        fontWeight: 600,
                                        fontFamily: 'Edu TAS Beginner',
                                        whiteSpace: 'nowrap',
                                      }}>
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
                                        whiteSpace: 'nowrap',
                                        fontFamily: 'Edu TAS Beginner',
                                      }}>
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
                                        whiteSpace: 'nowrap',
                                        fontFamily: 'Edu TAS Beginner',
                                      }}>
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
        
    )
}

export default Experience