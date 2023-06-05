import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button, Paper } from '@mui/material';
import { default as MuiAlert } from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from "react";
import { useNavigate } from 'react-router-dom';



function Recuperacao() {

    const [email, setEmail]=React.useState("")
    const [mensagem, setmensagem]=React.useState('');
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
       });
    
      const  Mensagem =(obj)=>{
          if(obj===false){
           setmensagem("Email inválido")
          }
          else{
           setmensagem("Erro de conexão ao servidor")
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
        navigate('/');
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
        if (obj=== true) {
          console.log("ok");
          navigate('/alterar');}
        else if (obj=== false){
          Mensagem(obj);
          Click();
          console.log("usuário inválido");
          }
      }
    
      const handClick=(e)=>{
          e.preventDefault();
          const cliente={email}
          console.log(cliente)
          fetch("http://localhost:8080/Clientes/dados2", {
              body:JSON.stringify(cliente),
              method:"POST",
              headers:{"Content-Type":"application/json"}
          }).catch(function() {
            Click();
            console.log("erro de servidor");
          }).then(data => data.json())
          .then(obj => myFunc(obj), obj=>Mensagem(obj))
        }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
        });
      }

    return (

    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
      sx={{height:400}}
    >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 2 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Introduza o seu Email
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Endereço de Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handClick}
              >
               Verificar Email
              </Button>
            </Box>
          </Box>
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
      </Grid>
 );
}

export default Recuperacao;