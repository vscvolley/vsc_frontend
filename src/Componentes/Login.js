import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { default as MuiAlert } from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { default as Button } from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
    const [password, setpassword] = React.useState('');
    const [passwordType, setpasswordType] = React.useState('password');
    const [email, setEmail] = React.useState('');
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [mensagem, setmensagem]=React.useState('');

    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setpasswordType("text")
       return;
      }
       setpasswordType("password")
    }

    const  Mensagem =(obj)=>{
      if(obj===false){
       setmensagem("Email ou senha inválidos")
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
    
    const action = (
      <React.Fragment>
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
        navigate('/interface');}
      else if (obj=== false){
        Mensagem(obj);
        Click();
        console.log("senha ou usuário inválidos");
        }
    }
    
    const handelClick = (e) => {
      e.preventDefault();
      const cliente = {password,email};
    fetch('http://localhost:8080/Clientes/dados',{
        method:'POST',
        mode: 'cors',
        body:JSON.stringify(cliente),
        headers:{"Content-Type": 'application/json'},
      }).catch(function() {
        Click();
        console.log("erro de servidor");
      }).then(data => data.json())
      .then(obj => myFunc(obj), obj=>Mensagem(obj))
    }
    

  return (

      <Grid container component="main" sx={{ minHeight: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/bg.png)",
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my:10,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Autenticação
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={passwordType}
                id="password"
                autoComplete="password"
                autoFocus
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <Grid display={'inline-flex'} alignItems={'center'} justifyContent={'center'}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  onClick={togglePassword}
                />
                <Typography>Mostrar Password</Typography>
              </Grid>
              <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handelClick}
              >
                Entrar
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={Close}
                action={action}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
              >
                <Alert onClose={Close} severity="info" sx={{ width: '100%' }}>
                  {mensagem}
                </Alert>
              </Snackbar>
              </div>
              <Grid container>
                <Grid item xs textAlign={'left'}>
                  <Button href='/Recuperacao' size='small'>
                    Perdi o acesso?
                  </Button>
                </Grid>
                <Grid item xs textAlign={'right'}>
                  <Button href='/pin' size='small'>
                    Nâo é cliente? Aderir
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}
    

export default Login;