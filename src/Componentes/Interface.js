import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { default as Box } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from "react";
import { useNavigate } from 'react-router-dom';
import vsc from './imgs/volleyball.svg';

function Interface() {
  const navigate = useNavigate();
    const handelClick1 = (e) => {
      e.preventDefault();
      navigate('/relatorios');
    }
    const handelClick2 = (e) => {
      e.preventDefault();
      navigate('/mapas');
    }
    const handelClick3 = (e) => {
      e.preventDefault();
      navigate('/registos');
    }
    const handelClick4 = (e) => {
      e.preventDefault();
      navigate('/challenge');
    }

    const nav= (e) => {
      navigate('/perfil');
    }

    const nav1= (e) => {
      navigate('/vsc_frontend');
    }

    const actions = [
      { icon: <AccountCircleOutlinedIcon onClick={nav}></AccountCircleOutlinedIcon>, name: 'Perfil'},
      { icon: <ExitToAppOutlinedIcon onClick={nav1}></ExitToAppOutlinedIcon>, name: 'Sair' },
    ];

    const theme = createTheme();

return (
  <ThemeProvider theme={theme} >
    <Grid container component="main" sx={{backgroundImage: 'url(/bg1.jpg)',backgroundPosition:'center', overflowX:'hidden', overflowY:'hidden', scrollbarWidth: 'none', msOverflowStyle:'none',}} minHeight='100vh' margin={0}>
      <Grid container component={Paper} elevation={5} borderRadius={0}  bgcolor='#41a5f5' width='100vw' maxHeight='8vh' textAlign='center' alignItems='center' justifyContent='center' >
        <Typography component={'span'} fontSize='2.5rem' variant='h3' fontFamily='sans-serif' >VSC Volley <img src={vsc} alt='' height='35vw' width='40vw'></img>
        </Typography>
      </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 5, sm: 2, md: 3 }} justifyContent="center" alignSelf='center'>
          <Grid item xs="auto"  textAlign='center' sx={{ '& button': { m: 1 } }}>
              <Button onClick={handelClick1} variant="outlined"  sx={{borderColor: 'grey.500',minHeight:'30vh',minWidth:'20vw',bgcolor:'white'}}>
                <Typography component={'span'} display={'flex'} borderRadius={1} fontWeight={'bold'}  fontSize={'1.1rem'} color={'white'} bgcolor={'grey.400'} minHeight={'5vh'} sx={{alignItems:'center', paddingLeft:'8px'}}>
                    Relatório
                    <Avatar variant='rounded'  sx={{  minHeight:'5vh'}} >
                      <AssessmentOutlinedIcon></AssessmentOutlinedIcon>
                    </Avatar>
                </Typography>
              </Button>
          </Grid>
            <Grid item xs="auto"  textAlign='center' sx={{ '& button': { m: 1 } }}>
              <Button onClick={handelClick2} variant="outlined"  sx={{borderColor: 'grey.500',minHeight:'30vh',minWidth:'20vw',bgcolor:'white'}}>
                <Typography component={'span'} display={'flex'} borderRadius={1} fontWeight={'bold'}  fontSize={'1.1rem'} color={'white'} bgcolor={'grey.400'} minHeight={'5vh'} sx={{alignItems:'center', paddingLeft:'8px'}}>
                  Mapas Div
                  <Avatar variant='rounded'  sx={{  minHeight:'5vh'}} >
                    <MapOutlinedIcon></MapOutlinedIcon>
                  </Avatar>
                </Typography>
              </Button>
            </Grid>
        </Grid>
        <Box paddingTop='5vh'/>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 5, sm: 2, md: 3 }} justifyContent="center">
            <Grid item xs="auto" textAlign='center' sx={{ '& button': { m: 1 } }}>
              <Button onClick={handelClick3} variant="outlined"  sx={{borderColor: 'grey.500',minHeight:'30vh',minWidth:'20vw',bgcolor:'white'}}>
                <Typography component={'span'} display={'flex'} borderRadius={1} fontWeight={'bold'}  fontSize={'1.1rem'} color={'white'} bgcolor={'grey.400'} minHeight={'5vh'} sx={{alignItems:'center', paddingLeft:'8px'}}>
                    Registos 
                    <Avatar variant='rounded'  sx={{  minHeight:'5vh'}} >
                      <ClassOutlinedIcon></ClassOutlinedIcon>
                    </Avatar>
                </Typography>
              </Button>
            </Grid>
            <Grid item xs="auto"  textAlign='center' sx={{ '& button': { m: 1 } }}>
                <Button onClick={handelClick4} variant="outlined"  sx={{borderColor: 'grey.500',minHeight:'30vh',minWidth:'20vw',bgcolor:'white'}}>
                  <Typography component={'span'} display={'flex'} borderRadius={1} fontWeight={'bold'}  fontSize={'1.1rem'} color={'white'} bgcolor={'grey.400'} minHeight={'5vh'} sx={{alignItems:'center', paddingLeft:'8px'}}>
                      Challenge
                      <Avatar variant='rounded'  sx={{  minHeight:'5vh'}} >
                        <EmojiEventsOutlinedIcon></EmojiEventsOutlinedIcon>
                      </Avatar>
                  </Typography>
                </Button>
            </Grid>
          </Grid>
            <SpeedDial
            ariaLabel="SpeedDial"
            sx={{ position: 'fixed', bottom: 16, right: 8 ,vertical: 'bottom',
            horizontal: 'right'}}
            icon={<SpeedDialIcon />}
            >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
            </SpeedDial>
    </Grid >
  </ThemeProvider>
    )
}
 
export default Interface;
