import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { SocialMedia } from '../SocialMedia/SocialMedia'
import { Grid, Link, Typography } from '@mui/material'

const listStyle = {
    padding: '10px',
    listStyleType: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
}

const Sidebar = () => {

    return (
        <Box>
            <Container maxWidth='xl'>    
                <Grid container>
                    <Grid item xs={6}>
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
                    </Grid>
                    <Grid
                        sx={{display: 'flex', justifyContent: 'flex-end'}}
                        item xs={6}>
                         {/* emeial */}
                        <Box
                            sx={{
                                position: 'fixed',
                                bottom: '5px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign:'center',
                                flexDirection: 'column',
                            }}>
                            <Typography
                                component='span'
                                sx={{
                                    display: 'inline-block',
                                    transform: 'rotate(90deg)',
                                    transformOrigin: 'right top',
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
                                issadiop9408@gmail.com
                            </Typography>
                            <Box
                                sx={{
                                    width: '1px',
                                    height: '175px',
                                    backgroundColor: 'whitesmoke',
                                    position: 'relative',
                                    // top: '20px',
                                    left: '65px'
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
        </Box>
        
    )
}

export default Sidebar