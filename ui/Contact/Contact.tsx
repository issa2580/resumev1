import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'

const Contact = () => {
    const emailAdress = 'mailto:issadiop9408@gmail.com'

    const handleContact = () => {
        window.location.href = emailAdress
    }
    return (
        <Box 
            id='contact'
            sx={{minHeight:'70vh'}}>
            <Container>
                {/* Box Title  */}
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
                            04.
                    </span>
                    <Typography
                        sx={{
                            fontSize:{xs: '20px', md: '32px'},
                            textTransform: 'capitalize',
                            fontWeight: 900,
                            fontFamily: 'Edu TAS Beginner',
                            whiteSpace: 'nowrap',
                        }}>
                            Get In Touch
                    </Typography>
                    <Divider 
                        sx={{
                            width:{xs: '120px', md: '200px'},
                            height: '1px', 
                            border: '1px solid #64ffda',
                        }} 
                    />
                </Box>

                {/* Box Contact in touch  */}
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto',
                        width: '60%',
                        pt:'75px'
                    }}>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '35px',
                            textAlign: 'center',
                            fontFamily: 'Edu TAS Beginner',
                        }}>
                        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </Typography>
                    <Box sx={{pt:'50px'}}>
                        <Button
                        onClick={handleContact}
                            sx={{
                                color: '#64ffda',
                                display: 'flex',
                                border: '1px solid',
                                borderWidth: '2px',
                                padding: '10px',
                                width: '150px',
                                '&:hover': {
                                    color: 'whitesmoke',
                                    borderColor: '#64ffda',
                                    margin: '0 auto 5px',
                                    width: '150px',
                                    boxShadow: '5px 5px 0 0 #64ffda'
                                }
                            }}>
                            <Typography
                                sx={{fontFamily: 'Edu TAS Beginner'}}>
                                Say Hello
                            </Typography>
                        </Button>
                    </Box>  
                    
                    <Link 
                        sx={{textDecoration: 'none'}}
                        href='#home'>
                        <Box
                            sx={{
                                position: 'relative',
                                top: '100px',
                                cursor: 'pointer', 
                                transition: 'opacity 0.3s ease',
                            }}
                            onClick={() => {
                                //  tst 
                            }}>
                            <KeyboardDoubleArrowUpIcon
                            sx={{
                                fontSize: '75px',
                                color: '#64ffda',
                                animation: 'bounce 1s infinite',
                            }}
                                />
                        </Box>
                    </Link>

                    {/* Box contact github  */}
                    <Link 
                        href='https://github.com/issa2580'
                        target='_blank'
                        sx={{
                            textDecoration: 'none',
                            color: 'whitesmoke',
                            '&:hover': {
                                color: '#64ffda'
                            }
                        }}>
                        <Box sx={{pt:'200px'}}>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontStyle: 'italic',
                                    fontWeight: 400,
                                    lineHeight: '35px',
                                    textAlign: 'center',
                                    fontFamily: 'Edu TAS Beginner',
                                }}>
                                Designed & Built by Issa Diop
                            </Typography>
                        <Box
                            sx={{
                                textAlign: 'center',
                                bottom: 0,
                                width: '100%',
                            }}>
                            <img 
                                src="https://res.cloudinary.com/fsocity/image/upload/v1685247384/github_esis09.png" 
                                alt="" 
                            />
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontStyle: 'italic',
                                    fontWeight: 400,
                                    lineHeight: '35px',
                                    textAlign: 'center',
                                    fontFamily: 'Edu TAS Beginner',
                                }}>
                                © 2023 GitHub, Inc.
                            </Typography>
                            
                        </Box>
                    </Box>  
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}

export default Contact