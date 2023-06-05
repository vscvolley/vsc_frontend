import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { default as MuiAlert } from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function RegistosEquipas() {

    const [nome, setnome] = React.useState('');
    const [numJogador, setnumJogador] = React.useState('');
    const [posicao, setposicao] = React.useState('');
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [mensagem, setmensagem]=React.useState('');


    const  Mensagem =(obj)=>{
        if(obj===true){
         setmensagem("Jogador Registado!");
        }
        else if(obj===false){
         setmensagem("Campos vazios ou incorretos");
        }
        else{
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
  
          const nav= (event, reason) => {
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
        if (obj=== true) {
          Click();
          console.log("ok");
          }
        else if (obj=== false){
          Click();
          console.log("senha ou usuário repetidos ou campos vazios");
          }
        else{
          Click();
          console.log("error");
          }
        }
  

    const enviar = (event) => {
        const jogador = {nome, numJogador, posicao};
        console.log(jogador);
        fetch('http://localhost:8080/Jogador/add', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jogador),
            headers: { "Content-Type": 'application/json' },
        }).catch(function() {
            console.log("erro de servidor");
          }).then(data => data.json())
          .then(obj => myFunc(obj), obj=>Mensagem(obj))
    }


    return (
        <Grid container component="main" minHeight={'100vh'} minWidth={'100vw'} sx={{ justifyContent: 'center', alignItems: '-moz-initial', backgroundImage: 'url(https://img.freepik.com/premium-vector/silhouette-male-volleyball-player-jumping-hit-ball_9955-1144.jpg?w=900)', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
            <Grid container component={Paper} elevation={5} borderRadius={0} bgcolor='#DDE6ED' width='100vw' maxHeight='8vh' textAlign='center' alignItems='center' justifyContent='center' >
                <Typography component={'span'} fontSize='2.5rem' variant='h3' fontFamily='sans-serif' >Vitória
                </Typography>
            </Grid>
            <Grid container component={Paper} elevation={5} borderRadius={2} width={'55vw'} height={'65vh'} justifyContent={'center'} display={'inline-flex'} alignItems={'-moz-initial'} bgcolor={'#DDE6ED'}>
                <Typography width={'100vw'} height={'5vh'} justifyContent={'center'} paddingTop={1} variant="h4" gutterBottom>
                    Registar Jogador
                </Typography>
                    <TextField fullWidth={'5vw'} id="filled-basic" label="Nome" variant="filled" onChange={(e) => setnome(e.target.value)}>
                    </TextField>
                    <TextField fullWidth={'5vw'} id="filled-basic" label="Número de jogador" variant="filled" onChange={(e) => setnumJogador(e.target.value)}>
                    </TextField>
                    <TextField fullWidth={'5vw'} id="filled-basic" label="Posição" variant="filled" onChange={(e) => setposicao(e.target.value)}>
                    </TextField>
                <Grid container  justifyContent={'center'} alignContent={'center'} >
                    <Button variant="contained" endIcon={<SendIcon />} onClick={() => {enviar()}}>
                       Enviar
                    </Button>
                </Grid>
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
        </Grid>
    )
}

export default RegistosEquipas;