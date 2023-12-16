import '../../src/index.css'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { experimentalStyled as styled } from '@mui/material/styles'

import Issa from '../../src/assets/issa.png'


const customAboutStyles = {
    fontFamily: 'Edu TAS Beginner',
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '35px',
    textAlign: 'justify',
    paddingTop: '30px',
}as const

const spanStyle = {
    color: '#64ffda',
    fontSize: '18px',
    fontFamily: 'Edu TAS Beginner',
    fontStyle: 'italic',
}

const Item = styled(Paper)(({ theme }) => ({
    background: '#233554',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
}));


const frontend = [
    {
        id: 1,
        title: '▹ ReactJS'
    },
    {
        id: 2,
        title: '▹ NextJS'
    },
    {
        id: 3,
        title: '▹ Angular'
    },
]
const backend = [
    {
        id: 1,
        title: '▹ ExpressJS'
    },
    {
        id: 2,
        title: '▹ NestJS'
    },
    {
        id: 3,
        title: '▹ Django'
    },
]
const databases = [
    {
        id: 1,
        title: '▹ Mysql'
    },
    {
        id: 2,
        title: '▹ Postgres'
    },
    {
        id: 3,
        title: '▹ Mongodb'
    },
]

const About = () => {
    return (
        <Box
            id = 'about'
            sx={{
                paddingTop: '10px',
                minHeight: 'auto',
                paddingBottom: '150px',
                
            }}>
            <Container>
                {/* Titlt describe  */}
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
                            01.
                    </span>
                    <Typography
                        sx={{
                            fontSize:{xs: '18px', md: '32px'},
                            textTransform: 'capitalize',
                            fontWeight: 900,
                            fontFamily: 'Edu TAS Beginner',
                            whiteSpace: 'nowrap',
                        }}>
                            about me
                    </Typography>
                    <Divider 
                        sx={{
                            width: {xs: '50px', md: '200px'}, 
                            height: 0.1, 
                            border: '1px solid #64ffda',
                        }} 
                    />
                </Box>
                {/* Content describes */}
                <Box 
                    sx={{
                        padding:{xs:'0 50px', md: '100px 0'},
                        display:{xs:'block', md: 'flex'},
                        justifyContent:{xs:'center', md: 'space-between'},
                        alignItems:{xs:'center', md: 'space-between'},
                        gap: {xs:'0', md: '50px',},
                        }}>
                        <Box sx={{width: '100%'}}>
                            <Typography
                                sx={{
                                    ...customAboutStyles,
                                    fontSize:{xs: '18px', md: '20px'}
                                }}>
                                Passionate about Tech and the world of the Web.
                                My curiosity, my sense of challenge and my taste for solving problems 
                                led me to create my first lines of code in with &nbsp; 
                                <span className='respSpan' style={{...spanStyle}}>HTML</span> and &nbsp; 
                                <span className='respSpan' style={{...spanStyle}}>CSS</span>.
                            </Typography>
                            <Typography
                                sx={{
                                    ...customAboutStyles,
                                    fontSize:{xs: '18px', md: '20px'}
                                }}>
                                I work effectively remotely with the best communication and project management 
                                tools such as: <span style={{...spanStyle}}>Discord</span>, <span style={{...spanStyle}}>Zoom</span>, <span style={{...spanStyle}}>Github</span> and <span style={{...spanStyle}}>Gitlab</span>
                            </Typography>
                            <Typography 
                                sx={{
                                    ...customAboutStyles,
                                    fontSize:{xs: '18px', md: '20px'}
                                }}>
                                Now, I work on these modern full <span style={{...spanStyle}}>Javascript</span>, <span style={{...spanStyle}}>Typescript</span> and <span style={{...spanStyle}}>Python</span> stacks that I evolve professionally. I define myself as a fullstack developer.
                            </Typography>
                            <Grid container spacing={2}>
                            {/* Frontend */}
                            <Grid
                                item lg={4} md={12} xs={12}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'normal',
                                        fontWeight: 900,
                                        textTransform: 'capitalize',
                                        color: '#whiteSmoke',
                                        textAlign: 'center'
                                    }}>
                                    Frontend
                                </Typography>
                                {frontend.map((item) => (
                                    <Item>
                                        <Typography
                                            key={item.id}
                                            sx={{
                                                fontSize: '15px',
                                                fontFamily: 'Edu TAS Beginner',
                                                fontStyle: 'normal',
                                                fontWeight: 600,
                                                textTransform: 'capitalize',
                                                color: '#64ffda'
                                            }}>
                                            {item.title}
                                        </Typography>
                                    </Item>
                                ))}
                            </Grid>

                            {/* Backend */}
                            <Grid item lg={4} md={12} xs={12}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'normal',
                                        fontWeight: 900,
                                        textTransform: 'capitalize',
                                        color: '#whiteSmoke',
                                        textAlign: 'center'
                                    }}>
                                    Backend
                                </Typography>
                                {backend.map((back) => (
                                    <Item>
                                        <Typography
                                            key={back.id}
                                            sx={{
                                                fontSize: '15px',
                                                fontFamily: 'Edu TAS Beginner',
                                                fontStyle: 'normal',
                                                fontWeight: 600,
                                                textTransform: 'capitalize',
                                                color: '#64ffda'
                                            }}>
                                            {back.title}
                                        </Typography>
                                    </Item>
                                ))}
                            </Grid>

                            {/* Databases */}
                            <Grid item lg={4} md={12} xs={12}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontFamily: 'Edu TAS Beginner',
                                        fontStyle: 'normal',
                                        fontWeight: 900,
                                        textTransform: 'capitalize',
                                        color: '#whiteSmoke',
                                        textAlign: 'center'
                                    }}>
                                    Databases
                                </Typography>
                                {databases.map((db) => (
                                    <Item>
                                        <Typography
                                            key={db.id}
                                            sx={{
                                                fontSize: '15px',
                                                fontFamily: 'Edu TAS Beginner',
                                                fontStyle: 'normal',
                                                fontWeight: 600,
                                                textTransform: 'capitalize',
                                                color: '#64ffda'
                                            }}>
                                            {db.title}
                                        </Typography>
                                    </Item>
                                ))}
                            </Grid>
                        </Grid>  
                        </Box>

                        <Box
                            sx={{
                                mt: '25px',
                                display: {xs: 'none', md: 'block', lg: 'block'},
                                position: 'relative',
                                width: '100%',
                                height: { xs: '500px', md: '540px' },
                                borderRadius: '5px',
                                overflow: 'hidden',
                                objectFit: 'cover',
                                '&:hover': {
                                    borderColor: '#64ffda',
                                    margin: '0 auto 10px',
                                    width: '100%',
                                    boxShadow: '10px 10px 0 0 #64ffda',
                                    color: 'whitesmoke'
                                },
                                '&:hover img': {
                                    opacity: 1,
                                },
                                '& img': {
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'opacity 0.3s ease-in-out',
                                    opacity: 0.5,
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(100, 255, 218, 0.5)',
                                },
                            }}>
                            <img src={Issa} alt="bg image" />
                        </Box>
                    </Box>
            </Container>
        </Box>
    )
}

export default About