import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { SocialMedia } from '../SocialMedia/SocialMedia'
import { Link, Typography } from '@mui/material'

const listStyle = {
    padding: '10px',
    listStyleType: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
}

const Sidebar = () => {

     const email = 'issadiop9408@gmail.com';

    return (
        <Box>
            <Container maxWidth='xl'>    
                {/* Media Socio  */}
                <Box 
                    sx={{
                        position: 'fixed',
                        bottom: '4px'
                    }}>
                    <Box>
                        {SocialMedia.map((media, index) => (
                            <li 
                                key={index}
                                style={{...listStyle}}
                                className='listHover'
                                >
                                <Box 
                                    sx={{
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'translateY(-3px)',
                                        }
                                    }}>
                                    <Link
                                        href={media.url} aria-label={media.name} target= '_blank'>
                                        <img
                                            src={media.name}
                                            alt={media.url || ''}
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}>
                                        </img>
                                    </Link>
                                </Box>
                            </li>
                        ))}
                        <Box 
                            sx={{
                                width: '1px',
                                height: '170px',
                                backgroundColor: 'whitesmoke',
                                margin: '0 20px',
                            }}>
                        </Box>
                    </Box>
                </Box>
                {/* emeial */}
                <Box
                    sx={{
                        position: 'fixed',
                        top: '63%',
                        right: {xs: '-25%', md: 0},
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <Typography
                        component='span'
                        sx={{
                            display: 'inline-block',
                            transform: 'rotate(90deg)',
                            transformOrigin: 'left top',
                            whiteSpace: 'nowrap',
                            letterSpacing: 0,
                            fontFamily: 'Edu TAS Beginner',
                            fontGridlines: '3 1',
                            fontWeight: 'light',
                            fontSize: '15px',
                            fontStyle: 'italic',
                            color: '#64ffda',
                        }}
                    >
                        {email}
                    </Typography>
                    <Box
                        sx={{
                            width: '1px',
                            height: '175px',
                            backgroundColor: 'whitesmoke',
                            position: 'relative',
                            top: '160px',
                            right: '10px'
                        }}
                    />
                </Box>
            </Container>
        </Box>
        
    )
}

export default Sidebar