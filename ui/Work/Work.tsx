import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ClearIcon from '@mui/icons-material/Clear';
import Ref from '../../src/assets/ref.jpg'
import Fintra from '../../src/assets/fintra.png'

import '../../src/index.css'

import Xarala from '../../src/assets/xarala.png'
import ACC from '../../src/assets/acc.png'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Link, Slide } from '@mui/material'
import React from 'react'
import { TransitionProps } from '@mui/material/transitions'

const BoxBootcampStyle = {
    position: 'relative',
    background: 'red',
    width: '100%',
    height: '300px',
    borderRadius: '5px',
    overflow: 'hidden',
    left: '30px',
} as const

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction='up' ref={ref} {...props}></Slide>
})

const Work = () => {

    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
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
                        className="hover-box"
                        sx={{ 
                            ...BoxBootcampStyle,
                            display: {xs: 'none', md: 'flex'},
                            justifyContent: {xs: 'center', md: 'center'},
                            alignItems: {xs: 'center', md: 'center'},
                        }}>
                        <img
                            src={ACC}
                            alt="bg image"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <Box
                            className="hover-content"
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
                                ACC is an interactive e-learning platform aimed at providing engaging courses and meeting various educational needs. Our goal is to empower learners through a dynamic and user-friendly online learning experience.
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
                                    Postgres
                                </Typography>
                            </Box>
                            <Box>
                                <Button onClick={handleOpen}>
                                    <IconButton
                                        size='large'
                                        aria-label='my portfolio'
                                        aria-controls='menu-appbar'
                                        aria-haspopup='true'
                                        color='inherit'>
                                        <CoPresentIcon sx={{color: '#fff'}} />
                                    </IconButton>
                                </Button>
                                <Dialog
                                    sx={{ background: 'rgba(100, 255, 218, 0.5)', }}
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby='alert-dialog-slide-description'>
                                    <DialogTitle sx={{textAlign: 'center'}}>
                                        <Typography sx={{
                                            fontFamily: 'Edu TAS Beginner',
                                            fontWeight: '900',
                                            lineHeight: '34px',
                                            color: '#233554',
                                            fontSize: '25px',
                                            textTransform: 'capitalize',
                                        }}>
                                            References
                                        </Typography>
                                    </DialogTitle>
                                    <Box sx={{display:'flex', justifyContent:'center'}}>
                                    <img
                                        style={{
                                            objectFit: 'cover',
                                            width: '100px',
                                            height: '100px',
                                            border: '1px solid',
                                            borderRadius: '50%',
                                        }}
                                        src={Ref} 
                                        alt='Ousseynou Diop' />
                                    </Box>
                                    <DialogContent>
                                        <DialogContentText 
                                            sx={{
                                                color: '#233554',
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                fontFamily: 'Edu TAS Beginner',
                                                fontStyle: 'normal',
                                                lineHeight: '35px',
                                                textAlign: 'justify',
                                            }}
                                            id='alert-dialog-slide-description'>
                                            For any additional information or reference regarding my participation 
                                            in the web application development project led by &nbsp;
                                            <span 
                                                style={{color: '#233554',
                                                    fontSize: '20px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 900
                                                }}>
                                                Ousseynou Diop
                                            </span>, you can 
                                            contact him using the following contact details: &nbsp;
                                            <span
                                                style={{
                                                    color: '#233554',
                                                    fontSize: '18px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 700
                                                }}>
                                                xaralaxarala@gmail.com
                                            </span> or at &nbsp;
                                            <span
                                                style={{
                                                    color: '#233554',
                                                    fontSize: '18px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 700
                                                }}>
                                                76-377-22-60
                                            </span>.
                                        </DialogContentText> 
                                    </DialogContent>
                                    <DialogActions style={{ justifyContent: 'center' }}>
                                        <Button onClick={handleClose}>
                                            <IconButton
                                                size='large'
                                                aria-label='my portfolio'
                                                aria-controls='menu-appbar'
                                                aria-haspopup='true'
                                                color='inherit'>
                                                <ClearIcon sx={{color: '#233554'}} />
                                            </IconButton>
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Link
                                    href='https://next.xarala.co' aria-label='Fintra' target= '_blank'>
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
                                Xarala Accademy
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
                                ACC is an interactive e-learning platform aimed at providing engaging courses and meeting various educational needs. Our goal is to empower learners through a dynamic and user-friendly online learning experience.
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
                                    Postgres
                                </Typography>
                            </Box>
                            <Box>
                                <Button onClick={handleOpen}>
                                    <IconButton
                                        size='large'
                                        aria-label='my portfolio'
                                        aria-controls='menu-appbar'
                                        aria-haspopup='true'
                                        color='inherit'>
                                        <CoPresentIcon sx={{color: '#fff'}} />
                                    </IconButton>
                                </Button>
                                <Dialog
                                    sx={{ background: 'rgba(100, 255, 218, 0.5)', }}
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby='alert-dialog-slide-description'>
                                    <DialogTitle sx={{textAlign: 'center'}}>
                                        <Typography sx={{
                                            fontFamily: 'Edu TAS Beginner',
                                            fontWeight: '900',
                                            lineHeight: '34px',
                                            color: '#233554',
                                            fontSize: '25px',
                                            textTransform: 'capitalize',
                                        }}>
                                            References
                                        </Typography>
                                    </DialogTitle>
                                    <Box sx={{display:'flex', justifyContent:'center'}}>
                                    <img
                                        style={{
                                            objectFit: 'cover',
                                            width: '100px',
                                            height: '100px',
                                            border: '1px solid',
                                            borderRadius: '50%',
                                        }}
                                        src={Ref} 
                                        alt='Ousseynou Diop' />
                                    </Box>
                                    <DialogContent>
                                        <DialogContentText 
                                            sx={{
                                                color: '#233554',
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                fontFamily: 'Edu TAS Beginner',
                                                fontStyle: 'normal',
                                                lineHeight: '35px',
                                                textAlign: 'justify',
                                            }}
                                            id='alert-dialog-slide-description'>
                                            For any additional information or reference regarding my participation 
                                            in the web application development project led by &nbsp;
                                            <span 
                                                style={{color: '#233554',
                                                    fontSize: '20px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 900
                                                }}>
                                                Ousseynou Diop
                                            </span>, you can 
                                            contact him using the following contact details: &nbsp;
                                            <span
                                                style={{
                                                    color: '#233554',
                                                    fontSize: '18px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 700
                                                }}>
                                                xaralaxarala@gmail.com
                                            </span> or at &nbsp;
                                            <span
                                                style={{
                                                    color: '#233554',
                                                    fontSize: '18px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 700
                                                }}>
                                                76-377-22-60
                                            </span>.
                                        </DialogContentText> 
                                    </DialogContent>
                                    <DialogActions style={{ justifyContent: 'center' }}>
                                        <Button onClick={handleClose}>
                                            <IconButton
                                                size='large'
                                                aria-label='my portfolio'
                                                aria-controls='menu-appbar'
                                                aria-haspopup='true'
                                                color='inherit'>
                                                <ClearIcon sx={{color: '#233554'}} />
                                            </IconButton>
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Link
                                    href='https://xarala.co' aria-label='Fintra' target= '_blank'>
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

                    <Box  
                        className="hover-box"
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
                            className="hover-content"
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
                        className="hover-box"
                        sx={{ 
                            ...BoxBootcampStyle,
                            display: {xs: 'none', md: 'flex'},
                            justifyContent: {xs: 'center', md: 'center'},
                            alignItems: {xs: 'center', md: 'center'},
                        }}>
                        <img
                            src={Fintra}
                            alt="bg image"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <Box
                            className="hover-content"
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
                                Fintra
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
                                I have successfully managed the maintenance of an application dedicated to efficiently handling monthly salary processes for employees. This solution ensures accurate and timely salary management, contributing to the overall operational efficiency of the organization.
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
                                    NodeJS
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
                                    Postgres
                                </Typography>
                            </Box>
                            <Box>
                                <Button onClick={handleOpen}>
                                    <IconButton
                                        size='large'
                                        aria-label='my portfolio'
                                        aria-controls='menu-appbar'
                                        aria-haspopup='true'
                                        color='inherit'>
                                        <CoPresentIcon sx={{color: '#fff'}} />
                                    </IconButton>
                                </Button>
                                <Dialog
                                    sx={{ background: 'rgba(100, 255, 218, 0.5)'}}
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby='alert-dialog-slide-description'>
                                    <DialogTitle sx={{textAlign: 'center'}}>
                                        <Typography sx={{
                                            fontFamily: 'Edu TAS Beginner',
                                            fontWeight: '900',
                                            lineHeight: '34px',
                                            color: '#233554',
                                            fontSize: '25px',
                                            textTransform: 'capitalize',
                                        }}>
                                            References
                                        </Typography>
                                    </DialogTitle>
                                    <Box sx={{display:'flex', justifyContent:'center'}}>
                                    <img
                                        style={{
                                            objectFit: 'cover',
                                            width: '100px',
                                            height: '100px',
                                            border: '1px solid',
                                            borderRadius: '50%',
                                        }}
                                        src={Ref} 
                                        alt='Ousseynou Diop' />
                                    </Box>
                                    <DialogContent>
                                        <DialogContentText 
                                            sx={{
                                                color: '#233554',
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                fontFamily: 'Edu TAS Beginner',
                                                fontStyle: 'normal',
                                                lineHeight: '35px',
                                                textAlign: 'justify',
                                            }}
                                            id='alert-dialog-slide-description'>
                                            For any additional information or reference regarding my participation 
                                            in the web application development project led by &nbsp;
                                            <span 
                                                style={{
                                                    color: '#233554',
                                                    fontSize: '20px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 900
                                                }}>
                                                Ousseynou Diop
                                            </span>, you can 
                                            contact him using the following contact details: &nbsp;
                                            <span
                                                style={{
                                                    color: '#233554',
                                                    fontSize: '18px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 700
                                                }}>
                                                xaralaxarala@gmail.com
                                            </span> or at &nbsp;
                                            <span
                                                style={{
                                                    color: '#233554',
                                                    fontSize: '18px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 700
                                                }}>
                                                76-377-22-60
                                            </span>.
                                        </DialogContentText> 
                                    </DialogContent>
                                    <DialogActions style={{ justifyContent: 'center' }}>
                                        <Button onClick={handleClose}>
                                            <IconButton
                                                size='large'
                                                aria-label='my portfolio'
                                                aria-controls='menu-appbar'
                                                aria-haspopup='true'
                                                color='inherit'>
                                                <ClearIcon sx={{color: '#233554'}} />
                                            </IconButton>
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Link
                                    href='https://fintra.oryatech.com/' aria-label='Fintra' target= '_blank'>
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
                </Box>

                    {/* Box Expenses Trackers  */}
                {/* <Box 
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
                            <Box>
                                <Button>
                                    <IconButton
                                        size='large'
                                        aria-label='my portfolio'
                                        aria-controls='menu-appbar'
                                        aria-haspopup='true'
                                        color='inherit'>
                                        <CoPresentIcon sx={{color: '#fff'}} />
                                    </IconButton>
                                </Button>
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
                </Box> */}

                

        </Container>

      </Box>
    )
}

export default Work