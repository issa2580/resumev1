import '../../src/index.css'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { experimentalStyled as styled } from '@mui/material/styles'

import Issa from '../../src/assets/issa.png'
// import LaptopMacIcon from '@mui/icons-material/LaptopMac'
// import DataObjectIcon from '@mui/icons-material/DataObject';
// import AdbIcon from '@mui/icons-material/Adb'
// import ConstructionIcon from '@mui/icons-material/Construction'

// import TimelineItem from '@mui/lab/TimelineItem'
// import Timeline from '@mui/lab/Timeline'
// import TimelineSeparator from '@mui/lab/TimelineSeparator'
// import TimelineConnector from '@mui/lab/TimelineConnector'
// import TimelineContent from '@mui/lab/TimelineContent'
// import TimelineDot from '@mui/lab/TimelineDot'


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

const tools = [
    {
        id: 1,
        title: 'frontend'
    },
    {
        id: 1,
        title: 'backend'
    },
    {
        id: 1,
        title: 'databases'
    },
]
const frontend = [
    {
        id: 1,
        title: '▹ ReactJS'
    },
    {
        id: 1,
        title: '▹ ExpressJS'
    },
    {
        id: 1,
        title: '▹ Mysql'
    },
]
const backend = [
    {
        id: 1,
        title: '▹ NextJS'
    },
    {
        id: 1,
        title: '▹ NestJS'
    },
    {
        id: 1,
        title: '▹ Postgres'
    },
]
const databases = [
    {
        id: 1,
        title: '▹ Angular'
    },
    {
        id: 1,
        title: '▹ Django'
    },
    {
        id: 1,
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
                            fontSize:{xs: '20px', md: '32px'},
                            textTransform: 'capitalize',
                            fontWeight: 900,
                            fontFamily: 'Edu TAS Beginner',
                            whiteSpace: 'nowrap',
                        }}>
                            about me
                    </Typography>
                    <Divider 
                        sx={{
                            width: '200px', 
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
                        paddingBottom:{xs:'100px', md: '0'},
                        }}>
                        <Box sx={{width: '100%'}}>
                            <Typography
                                sx={{
                                    ...customAboutStyles,
                                    fontSize:{xs: '15px', md: '20px'}
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
                                    fontSize:{xs: '15px', md: '20px'}
                                }}>
                                I work effectively remotely with the best communication and project management 
                                tools such as: <span style={{...spanStyle}}>Discord</span>, <span style={{...spanStyle}}>Zoom</span>, <span style={{...spanStyle}}>Github</span> and <span style={{...spanStyle}}>Gitlab</span>
                            </Typography>
                            <Typography 
                                sx={{
                                    ...customAboutStyles,
                                    fontSize:{xs: '15px', md: '20px'}
                                }}>
                                Now, I work on these modern full <span style={{...spanStyle}}>Javascript</span>, <span style={{...spanStyle}}>Typescript</span> and <span style={{...spanStyle}}>Python</span> stacks that I evolve professionally. I define myself as a fullstack developer.
                            </Typography>
                            <Box sx={{ flexGrow: 1}}>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    {tools.map((tool, index) => (
                                    <Grid item xs={1} sm={4} md={4} key={index}>
                                        <Typography
                                            sx={{
                                                fontSize: '20px',
                                                fontFamily: 'Edu TAS Beginner',
                                                fontStyle: 'normal',
                                                fontWeight: 900,
                                                textTransform: 'capitalize',
                                                color: '#whiteSmoke'
                                            }}>
                                            {tool.title}
                                        </Typography>
                                    </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box sx={{ flexGrow: 1}}>
                                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    {frontend.map((front, index) => (
                                    <Grid item xs={1} sm={4} md={4} key={index}>
                                        <Item>
                                            <Typography
                                                sx={{
                                                    fontSize: '15px',
                                                    fontFamily: 'Edu TAS Beginner',
                                                    fontStyle: 'normal',
                                                    fontWeight: 600,
                                                    textTransform: 'capitalize',
                                                    color: '#64ffda'
                                                }}>
                                                {front.title}
                                            </Typography>
                                        </Item>
                                    </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box sx={{ flexGrow: 1, py:1}}>
                                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    {backend.map((back, index) => (
                                    <Grid item xs={1} sm={4} md={4} key={index}>
                                        <Item>
                                            <Typography
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
                                    </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box sx={{ flexGrow: 1}}>
                                <Grid 
                                    container 
                                    spacing={{ xs: 1, md: 1 }} 
                                    columns={{ xs: 4, sm: 8, md: 12 }}>
                                    {databases.map((db, index) => (
                                    <Grid item xs={1} sm={4} md={4} key={index}>
                                        <Item>
                                            <Typography
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
                                    </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: { xs: '500px', md: '580px' },
                                borderRadius: '5px',
                                overflow: 'hidden',
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