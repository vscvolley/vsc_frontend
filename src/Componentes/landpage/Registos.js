import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';


function Registos() {
    const navigate = useNavigate();

    const handelClick1 = (e) => {
        e.preventDefault();
        navigate('/registosEquipas');
    }

    const handelClick2 = (e) => {
        e.preventDefault();
        navigate('/registosOutras');
    }

    return (
        <Grid container component="main" sx={{backgroundImage: 'url(https://img.freepik.com/premium-vector/silhouette-male-volleyball-player-jumping-hit-ball_9955-1144.jpg?w=900)', backgroundPosition: 'center', overflowX: 'hidden', overflowY: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none', }} minHeight='100vh' margin={0}>
            <Grid container component={Paper} elevation={5} borderRadius={0} bgcolor='#DDE6ED' width='100vw' maxHeight='8vh' textAlign='center' alignItems='center' justifyContent='center' >
                <Typography component={'span'} fontSize='2.5rem' variant='h3' fontFamily='sans-serif' >Registos
                </Typography>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 5, sm: 2, md: 15 }} justifyContent="center" alignSelf='center' display={'inline-flex'} position={'relative'}>
                <Grid item xs="auto" textAlign='center' sx={{ '& button': { m: 1 } }}>
                    <Button onClick={handelClick1} variant="outlined" sx={{backgroundSize:'cover', backgroundImage:"url(/bg.jpg)", backgroundPosition: 'center', overflow: 'hidden', borderRadius:3, borderColor: 'grey.500', minHeight: '80vh', minWidth: '25vw', bgcolor: 'white'}}>
                        <Typography component={'span'} display={'flex'} borderRadius={1} fontWeight={'bold'} fontSize={'1.1rem'} color={'white'} bgcolor={'grey.400'} minHeight={'5vh'} minWidth={'6vw'} sx={{ alignItems: 'center', justifyContent:'center'}}>
                            Vitória
                        </Typography>
                    </Button>
                </Grid>
                <Grid item xs="auto" textAlign='center' sx={{ '& button': { m: 1 } }}>
                    <Button onClick={handelClick2} variant="outlined"  sx={{ backgroundSize:'cover' ,backgroundImage: 'url(https://scontent.fopo3-2.fna.fbcdn.net/v/t39.30808-6/327349464_456152049923011_7669556804522225706_n.png?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kwmmP8ZPh8EAX_rtwlP&_nc_ht=scontent.fopo3-2.fna&oh=00_AfDRd8NMfFv_lDrDspYl4f3duhYElIZ43ssvL2cODOXFEw&oe=647223FA)',backgroundPosition: 'center', borderRadius:3, borderColor: 'grey.500', minHeight: '80vh', minWidth: '25vw', bgcolor: 'white' }}>
                        <Typography component={'span'} display={'flex'} borderRadius={1} fontWeight={'bold'} fontSize={'1.1rem'} color={'white'} bgcolor={'grey.400'} minHeight={'5vh'} minWidth={'6vw'} sx={{ alignItems: 'center', justifyContent:'center'}}>
                            Jogos
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            <div className="button" style={{bottom:'10px',left:'10px',position:'fixed', background:'lightblue',border:'none', borderRadius:4}}>
                  <Button size='small'>
                    <NavLink to="/interface" style={{color:'white',textDecoration: 'none'}}>
                        Voltar
                    </NavLink>
                  </Button>
            </div>
        </Grid>
            )
}

export default Registos;