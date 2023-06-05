import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { default as MuiAlert } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function RegistosOutras() {

  const [equipa1, setequipa1] = React.useState('');
  const [equipa2, setequipa2] = React.useState('');
  const [resul1, setresul1] = React.useState('');
  const [resul2, setresul2] = React.useState('');
  const [jogador1, setjogador1] = React.useState('');
  const [jogador2, setjogador2] = React.useState('');
  const [jogador3, setjogador3] = React.useState('');
  const [jogador4, setjogador4] = React.useState('');
  const [jogador5, setjogador5] = React.useState('');
  const [jogador6, setjogador6] = React.useState('');
  const [tempojogo1, settempojogo1] = React.useState('');
  const [tempojogo2, settempojogo2] = React.useState('');
  const [tempojogo3, settempojogo3] = React.useState('');
  const [tempojogo4, settempojogo4] = React.useState('');
  const [tempojogo5, settempojogo5] = React.useState('');
  const [tempojogo6, settempojogo6] = React.useState('');
  const [numPontos1, setnumPontos1] = React.useState('');
  const [numPontos2, setnumPontos2] = React.useState('');
  const [numPontos3, setnumPontos3] = React.useState('');
  const [numPontos4, setnumPontos4] = React.useState('');
  const [numPontos5, setnumPontos5] = React.useState('');
  const [numPontos6, setnumPontos6] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [mensagem, setmensagem] = React.useState('');
  const navigate = useNavigate();

  const Mensagem = (obj) => {
    if (obj === true) {
      setmensagem("Registado!");
    }
    else if (obj === false) {
      setmensagem("Campos vazios ou incorretos");
    }
    else {
      setmensagem("Erro de conexão ao servidor");
    }
  }

  const Click = () => {
    setOpen(true);
  };

  const Close = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const nav = (event, reason) => {
    navigate('/registos');
  }

  const action = (
    <React.Fragment>
      <Button color="inherit" size="small" onClick={nav}>
        Voltar
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={Close}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  function myFunc(obj) {
    Mensagem(obj);
    if (obj === true) {
      Click();
      console.log('ok');
    }
    else if (obj === false) {
      Click();
      console.log("senha ou usuário repetidos ou campos vazios");
    }
    else {
      Click();
      console.log("error");
    }
  }

  const handleChange = (event) => {
    setequipa1(event.target.value);
  };

  const handleChange1 = (event) => {
    setequipa2(event.target.value);
  };


  const enviar = (event) => {
    const jogos = { equipa1, equipa2, resul1, resul2, jogador1, tempojogo1, numPontos1, jogador2, tempojogo2, numPontos2, jogador3, tempojogo3, numPontos3, jogador4, tempojogo4, numPontos4, jogador5, tempojogo5, numPontos5, jogador6, tempojogo6, numPontos6};
    console.log(jogos);
    fetch('http://localhost:8080/Jogos/add', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(jogos),
      headers: { "Content-Type": 'application/json' },
    }).catch(function () {
      console.log("erro de servidor");
    }).then(data => data.json())
      .then(obj => myFunc(obj), obj => Mensagem(obj))
  }

  return (
    <Grid container component="main" sx={{ justifyContent: 'center', alignContent: '-moz-initial', backgroundImage: 'url(https://img.freepik.com/premium-vector/silhouette-male-volleyball-player-jumping-hit-ball_9955-1144.jpg?w=900)', backgroundPosition: 'center', overflowX: 'hidden', overflowY: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none', }} minHeight='100vh' margin={0}>
      <Grid container component={Paper} elevation={5} borderRadius={0} bgcolor='#DDE6ED' width='100vw' maxHeight='8vh' textAlign='center' alignItems='center' justifyContent='center' >
        <Typography component={'span'} fontSize='2.5rem' variant='h3' fontFamily='sans-serif' >Registar Jogo
        </Typography>
      </Grid>
      <Grid container height={'10vh'}></Grid>
      <Grid container component={Paper} elevation={5} borderRadius={2} width={'50vw'} height={'120vh'} justifyContent={'center'} display={'inline-flex'} alignItems={'center'} bgcolor={'#E3F4F4'}>
        <Grid width={'100vw'} paddingTop={3}>
          <Typography variant='h4'>
            Registar resultado do jogo
          </Typography>
        </Grid>
        <Grid minWidth={'15vw'}>
          <Box sx={{ minWidth: 120, paddingTop: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Casa</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={equipa1}
                label="Casa"
                onChange={handleChange}
              >
                <MenuItem value={'A.J.F. Bastardome'}>A.J.F. Bastardo</MenuItem>
                <MenuItem value={'Benfica'}>Benfica</MenuItem>
                <MenuItem value={'Leixões'}>Leixões</MenuItem>
                <MenuItem value={'Esmoriz GC'}>Esmoriz GC</MenuItem>
                <MenuItem value={'Sporting CP'}>Sporting CP</MenuItem>
                <MenuItem value={'Castelo Maia GC'}>Castelo Maia GC</MenuItem>
                <MenuItem value={'Vitória SC'}>Vitória SC</MenuItem>
                <MenuItem value={'Académico de Espinho'}>Académico de Espinho</MenuItem>
                <MenuItem value={'Ala de Gondomar'}>Ala de Gondomar</MenuItem>
                <MenuItem value={'Sporting de Espinho'}>Sporting de Espinho</MenuItem>
                <MenuItem value={'Académico São Mamede'}>Académico São Mamede</MenuItem>
                <MenuItem value={'Viana'}>Viana</MenuItem>
                <MenuItem value={'SC Caldas'}>SC Caldas</MenuItem>
                <MenuItem value={'Santo Tirso'}>Santo Tirso</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Box width={'4vw'}></Box>
        <Grid width={'15vw'}>
          <Box sx={{ minWidth: 120, paddingTop: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Fora</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={equipa2}
                label="Fora"
                onChange={handleChange1}
              >
                <MenuItem value={'A.J.F. Bastardome'}>A.J.F. Bastardo</MenuItem>
                <MenuItem value={'Benfica'}>Benfica</MenuItem>
                <MenuItem value={'Leixões'}>Leixões</MenuItem>
                <MenuItem value={'Esmoriz GC'}>Esmoriz GC</MenuItem>
                <MenuItem value={'Sporting CP'}>Sporting CP</MenuItem>
                <MenuItem value={'Castelo Maia GC'}>Castelo Maia GC</MenuItem>
                <MenuItem value={'Vitória SC'}>Vitória SC</MenuItem>
                <MenuItem value={'Académico de Espinho'}>Académico de Espinho</MenuItem>
                <MenuItem value={'Ala de Gondomar'}>Ala de Gondomar</MenuItem>
                <MenuItem value={'Sporting de Espinho'}>Sporting de Espinho</MenuItem>
                <MenuItem value={'Académico São Mamede'}>Académico São Mamede</MenuItem>
                <MenuItem value={'Viana'}>Viana</MenuItem>
                <MenuItem value={'SC Caldas'}>SC Caldas</MenuItem>
                <MenuItem value={'Santo Tirso'}>Santo Tirso</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid container minWidth={'100vw'} justifyContent={'center'}>
          <TextField id="Outlined" label="Resultado" variant="outlined" sx={{ minWidth: '10vw', paddingRight: 10 }} onChange={(e) => setresul1(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Resultado" variant="outlined" onChange={(e) => setresul2(e.target.value)}>
          </TextField>
        </Grid>
        <Grid height={'0.1vh'}>_________________________________________________</Grid>
        <Grid width={'100vw'} paddingTop={3}>
          <Typography variant='h4' paddingTop={2}>
            Registar jogadores que jogaram
          </Typography>
        </Grid>
        <Grid paddingTop={3} display={'inline-flex'}>
          <TextField id="Outlined" label="Jogador" variant="outlined" onChange={(e) => setjogador1(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Tempo de jogo" variant="outlined" onChange={(e) => settempojogo1(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Número de pontos" variant="outlined" onChange={(e) => setnumPontos1(e.target.value)}>
          </TextField>
        </Grid>
        <Grid paddingTop={3} display={'inline-flex'}>
          <TextField id="Outlined" label="Jogador" variant="outlined" onChange={(e) => setjogador2(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Tempo de jogo" variant="outlined" onChange={(e) => settempojogo2(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Número de pontos" variant="outlined" onChange={(e) => setnumPontos2(e.target.value)}>
          </TextField>
        </Grid>
        <Grid paddingTop={3} display={'inline-flex'}>
          <TextField id="Outlined" label="Jogador" variant="outlined" onChange={(e) => setjogador3(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label=" Tempo de jogo" variant="outlined" onChange={(e) => settempojogo3(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Número de pontos" variant="outlined" onChange={(e) => setnumPontos3(e.target.value)}>
          </TextField>
        </Grid>
        <Grid paddingTop={3} display={'inline-flex'}>
          <TextField id="Outlined" label="Jogador" variant="outlined" onChange={(e) => setjogador4(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Tempo de jogo" variant="outlined" onChange={(e) => settempojogo4(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Número de pontos" variant="outlined" onChange={(e) => setnumPontos4(e.target.value)}>
          </TextField>
        </Grid>
        <Grid paddingTop={3} display={'inline-flex'}>
          <TextField id="Outlined" label="Jogador" variant="outlined" onChange={(e) => setjogador5(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Tempo de jogo" variant="outlined" onChange={(e) => settempojogo5(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Número de pontos" variant="outlined" onChange={(e) => setnumPontos5(e.target.value)}>
          </TextField>
        </Grid>
        <Grid paddingTop={3} display={'inline-flex'}>
          <TextField id="Outlined" label="Jogador" variant="outlined" onChange={(e) => setjogador6(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Tempo de jogo" variant="outlined" onChange={(e) => settempojogo6(e.target.value)}>
          </TextField>
          <TextField id="Outlined" label="Número de pontos" variant="outlined" onChange={(e) => setnumPontos6(e.target.value)}>
          </TextField>
        </Grid>
        <Grid width={'100vw'} height={'5vh'} />
        <Grid container minWidth={'100vw'} justifyContent={'center'}>
          <Button variant="contained" endIcon={<SendIcon />} onClick={() => { enviar() }}>
            Enviar
          </Button>
        </Grid>
      </Grid>
      <Grid width={'100vw'} height={'20vh'}>

      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}>
        <Alert onClose={Close} action={action} severity="info" sx={{ width: '100%' }}>
          {mensagem}
        </Alert>
      </Snackbar>
      <div className="button" style={{bottom:'10px',left:'10px',position:'fixed', background:'lightblue',border:'none', borderRadius:4}}>
                  <Button size='small'>
                    <NavLink to="/registos" style={{color:'white',textDecoration: 'none'}}>
                        Voltar
                    </NavLink>
                  </Button>
            </div>
    </Grid >
  )
}

export default RegistosOutras;