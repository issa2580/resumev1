import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import Xarala from '../../src/assets/xarala.png'
import { IconButton, Link } from '@mui/material'

const BoxBootcampStyle = {
    position: 'relative',
    background: 'red',
    width: '100%',
    height: '300px',
    borderRadius: '5px',
    overflow: 'hidden',
    left: '30px',
} as const

const Work = () => {
    return (
      <Box 
        id='work'
        sx={{minHeight: 'auto'}}>
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
                            03.
                    </span>
                    <Typography
                        sx={{
                            fontSize:{xs: '20px', md: '32px'},
                            textTransform: 'capitalize',
                            fontWeight: 900,
                            fontFamily: 'Edu TAS Beginner',
                            whiteSpace: 'nowrap',
                        }}>
                            Some Things I’ve Built
                    </Typography>
                    <Divider 
                        sx={{
                            width:{xs: '100px', md: '200px'},
                            height: '1px', 
                            border: '1px solid #64ffda',
                            position: 'relative',
                        }} 
                    />
                </Box>
                {/* Box workings */}
                {/* Box Africa Code Camp  */}
                <Box 
                    sx={{ 
                        display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center',
                        py:'50px'
                    }}>
                    <Box 
                        sx={{ 
                            ...BoxBootcampStyle,
                            display: {xs: 'none', md: 'flex'},
                            justifyContent: {xs: 'center', md: 'center'},
                            alignItems: {xs: 'center', md: 'center'},
                        }}>
                        <img
                            src={Xarala}
                            alt="bg image"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <Box
                            sx={{
                            width: '100%',
                            height: '100%',
                            background: 'rgba(100, 255, 218, 0.5)',
                            position: 'relative',
                        }} />
                    </Box>
                    <Box 
                        sx={{
                            display:'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            right: '30px',
                            gap:'10px'
                        }}>
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection: 'column',
                                justifyContent: 'end',
                                alignItems: 'end',
                            }}>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 400,
                                    fontFamily: 'Edu TAS Beginner',
                                    whiteSpace: 'nowrap',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                    color: '#64ffda'
                                }}>
                                contributed project
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    textTransform: 'capitalize',
                                    fontWeight: 900,
                                    fontFamily: 'Edu TAS Beginner',
                                    whiteSpace: 'nowrap',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                }}>
                                Africa-CodeCamp
                            </Typography>
                        </Box> 
                        <Box
                            sx={{
                                background:'#233554',
                                borderRadius: '5px',
                                display: {xs: 'flex', md: 'flex'},
                                justifyContent: {xs: 'end', md: 'center'},
                                alignItems: {xs: 'end', md: 'center'},
                                width: {xs: '90%', md: '100%'},
                                margin: {xs: '0 70px', md: '0'}
                            }}>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    fontFamily: 'Edu TAS Beginner',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                    padding: '20px 20px',
                                }}>
                            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection: 'column',
                                justifyContent: 'end',
                                alignItems: 'end'
                            }}>
                            <Box
                                sx={{
                                    width:'100%',
                                    display:'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'end',
                                    alignItems: 'end',
                                    gap:'50px'
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    NextJS
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Material UI
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Django
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Docker
                                </Typography>
                            </Box>
                            <Link
                                href='#' aria-label='Fintra' target= '_blank'>
                                <IconButton
                                    size='large'
                                    aria-label='my portfolio'
                                    aria-controls='menu-appbar'
                                    aria-haspopup='true'
                                    color='inherit'>
                                    <OpenInNewIcon sx={{color: '#fff'}} />
                                </IconButton>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                    {/* Box Teranga livre  */}
                <Box 
                    sx={{ 
                        display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center',
                        py:'50px'
                    }}>
                    
                    <Box 
                        sx={{
                            display:'flex',
                            width:'100%',
                            flexDirection: 'column',
                            position: 'relative',
                            left: '30px',
                            gap:'10px',
                            zIndex: 2
                        }}>
                        <Box
                            sx={{
                                display: {xs: 'flex', md: 'flex'},
                                flexDirection: {xs: 'column', md: 'column'},
                                justifyContent: {xs: 'start', md: 'start'},
                                alignItems: {xs: 'start', md: 'start'},
                                width: {xs: '90%', md: '100%'},
                                margin: {xs: '0 10px', md: '0'}
                            }}>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 400,
                                    fontFamily: 'Edu TAS Beginner',
                                    whiteSpace: 'nowrap',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                    color: '#64ffda'
                                }}>
                                realized project
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    textTransform: 'capitalize',
                                    fontWeight: 900,
                                    fontFamily: 'Edu TAS Beginner',
                                    whiteSpace: 'nowrap',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                }}>
                                Teranga Livre
                            </Typography>
                        </Box> 
                        <Box
                            sx={{
                                background:'#233554',
                                borderRadius: '5px',
                                display: {xs: 'flex', md: 'flex'},
                                justifyContent: {xs: 'start', md: 'center'},
                                alignItems: {xs: 'start', md: 'center'},
                                width: {xs: '90%', md: '100%'},
                                margin: {xs: '0 10px', md: '0'}
                            }}>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    fontFamily: 'Edu TAS Beginner',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                    padding: '20px 20px',
                                }}>
                            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: {xs: 'flex', md: 'flex'},
                                flexDirection: {xs: 'column', md: 'column'},
                                justifyContent: {xs: 'start', md: 'start'},
                                alignItems: {xs: 'start', md: 'start'},
                                width: {xs: '90%', md: '100%'},
                                margin: {xs: '0 10px', md: '0'}
                            }}>
                            <Box
                                sx={{
                                    width:'100%',
                                    display:'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'start',
                                    alignItems: 'start',
                                    gap:'50px'
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Bootstrap
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Django
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Django REST
                                </Typography>
                            </Box>
                            <Link
                                href='#' aria-label='Fintra' target= '_blank'>
                                <IconButton
                                    size='large'
                                    aria-label='my portfolio'
                                    aria-controls='menu-appbar'
                                    aria-haspopup='true'
                                    color='inherit'>
                                    <OpenInNewIcon sx={{color: '#fff'}} />
                                </IconButton>
                            </Link>
                        </Box>
                    </Box>

                    <Box    
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '300px',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            right: '30px',
                            display: {xs: 'none', md: 'flex'},
                            justifyContent: {xs: 'center', md: 'center'},
                            alignItems: {xs: 'center', md: 'center'},
                        }}>
                        <img
                            src={Xarala}
                            alt="bg image"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <Box
                            sx={{
                            width: '100%',
                            height: '100%',
                            background: 'rgba(100, 255, 218, 0.5)',
                            position: 'relative',
                        }} />
                    </Box>
                </Box>

                {/* Box Fintra  */}
                <Box 
                    sx={{ 
                        display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center',
                        py:'50px'
                    }}>
                    <Box 
                        sx={{ 
                            ...BoxBootcampStyle,
                            display: {xs: 'none', md: 'flex'},
                            justifyContent: {xs: 'center', md: 'center'},
                            alignItems: {xs: 'center', md: 'center'},
                        }}>
                        <img
                            src={Xarala}
                            alt="bg image"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <Box
                            sx={{
                            width: '100%',
                            height: '100%',
                            background: 'rgba(100, 255, 218, 0.5)',
                            position: 'relative',
                        }} />
                    </Box>
                    <Box 
                        sx={{
                            display:'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            right: '30px',
                            gap:'10px'
                        }}>
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection: 'column',
                                justifyContent: 'end',
                                alignItems: 'end',
                            }}>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 400,
                                    fontFamily: 'Edu TAS Beginner',
                                    whiteSpace: 'nowrap',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                    color: '#64ffda'
                                }}>
                                contributed project
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    textTransform: 'capitalize',
                                    fontWeight: 900,
                                    fontFamily: 'Edu TAS Beginner',
                                    whiteSpace: 'nowrap',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                }}>
                                Africa-CodeCamp
                            </Typography>
                        </Box> 
                        <Box
                            sx={{
                                background:'#233554',
                                borderRadius: '5px',
                                display: {xs: 'flex', md: 'flex'},
                                justifyContent: {xs: 'end', md: 'center'},
                                alignItems: {xs: 'end', md: 'center'},
                                width: {xs: '90%', md: '100%'},
                                margin: {xs: '0 70px', md: '0'}
                            }}>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    fontFamily: 'Edu TAS Beginner',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                    padding: '20px 20px',
                                }}>
                            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection: 'column',
                                justifyContent: 'end',
                                alignItems: 'end'
                            }}>
                            <Box
                                sx={{
                                    width:'100%',
                                    display:'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'end',
                                    alignItems: 'end',
                                    gap:'50px'
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    NextJS
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Material UI
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Django
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Docker
                                </Typography>
                            </Box>
                            <Link
                                href='#' aria-label='Fintra' target= '_blank'>
                                <IconButton
                                    size='large'
                                    aria-label='my portfolio'
                                    aria-controls='menu-appbar'
                                    aria-haspopup='true'
                                    color='inherit'>
                                    <OpenInNewIcon sx={{color: '#fff'}} />
                                </IconButton>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                    {/* Box Expenses Trackers  */}
                <Box 
                    sx={{ 
                        display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center',
                        py:'50px'
                    }}>
                    
                    <Box 
                        sx={{
                            display:'flex',
                            width:'100%',
                            flexDirection: 'column',
                            position: 'relative',
                            left: '30px',
                            gap:'10px',
                            zIndex: 2
                        }}>
                        <Box
                            sx={{
                                display: {xs: 'flex', md: 'flex'},
                                flexDirection: {xs: 'column', md: 'column'},
                                justifyContent: {xs: 'start', md: 'start'},
                                alignItems: {xs: 'start', md: 'start'},
                                width: {xs: '90%', md: '100%'},
                                margin: {xs: '0 10px', md: '0'}
                            }}>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 400,
                                    fontFamily: 'Edu TAS Beginner',
                                    whiteSpace: 'nowrap',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                    color: '#64ffda'
                                }}>
                                realized project
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    textTransform: 'capitalize',
                                    fontWeight: 900,
                                    fontFamily: 'Edu TAS Beginner',
                                    whiteSpace: 'nowrap',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                }}>
                                Teranga Livre
                            </Typography>
                        </Box> 
                        <Box
                            sx={{
                                background:'#233554',
                                borderRadius: '5px',
                                display: {xs: 'flex', md: 'flex'},
                                justifyContent: {xs: 'start', md: 'center'},
                                alignItems: {xs: 'start', md: 'center'},
                                width: {xs: '90%', md: '100%'},
                                margin: {xs: '0 10px', md: '0'}
                            }}>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    fontFamily: 'Edu TAS Beginner',
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    textAlign: 'justify',
                                    padding: '20px 20px',
                                }}>
                            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: {xs: 'flex', md: 'flex'},
                                flexDirection: {xs: 'column', md: 'column'},
                                justifyContent: {xs: 'start', md: 'start'},
                                alignItems: {xs: 'start', md: 'start'},
                                width: {xs: '90%', md: '100%'},
                                margin: {xs: '0 10px', md: '0'}
                            }}>
                            <Box
                                sx={{
                                    width:'100%',
                                    display:'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'start',
                                    alignItems: 'start',
                                    gap:'50px'
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Bootstrap
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Django
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        textTransform: 'capitalize',
                                        fontWeight: 400,
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'italic',
                                        lineHeight: '35px',
                                        textAlign: 'justify',
                                    }}>
                                    Django REST
                                </Typography>
                            </Box>
                            <Link
                                href='#' aria-label='Fintra' target= '_blank'>
                                <IconButton
                                    size='large'
                                    aria-label='my portfolio'
                                    aria-controls='menu-appbar'
                                    aria-haspopup='true'
                                    color='inherit'>
                                    <OpenInNewIcon sx={{color: '#fff'}} />
                                </IconButton>
                            </Link>
                        </Box>
                    </Box>

                    <Box    
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '300px',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            right: '30px',
                            display: {xs: 'none', md: 'flex'},
                            justifyContent: {xs: 'center', md: 'center'},
                            alignItems: {xs: 'center', md: 'center'},
                        }}>
                        <img
                            src={Xarala}
                            alt="bg image"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <Box
                            sx={{
                            width: '100%',
                            height: '100%',
                            background: 'rgba(100, 255, 218, 0.5)',
                            position: 'relative',
                        }} />
                    </Box>
                </Box>

                

        </Container>

      </Box>
    )
}

export default Work