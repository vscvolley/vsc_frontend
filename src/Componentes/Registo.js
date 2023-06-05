import CloseIcon from '@mui/icons-material/Close';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { Paper } from '@mui/material';
import { default as MuiAlert } from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Registo() {
    const [nome,setNome]=React.useState("");
    const [password, setPassword]=React.useState("");
    const [passwordType]= React.useState('text');
    const [email, setEmail]=React.useState("");
    const [mensagem, setmensagem]=React.useState('');
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const  Mensagem =(obj)=>{
      if(obj===true){
       setmensagem("Usuario criado!");
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
          navigate('/vsc_frontend');
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
        console.log(obj);
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


    const handClick=(e)=>{
        e.preventDefault();
        const cliente={nome,password,email}
        console.log(cliente)
        fetch("http://localhost:8080/Clientes/dados1", {
            body:JSON.stringify(cliente),
            method:"POST",
            mode: 'cors',
            headers:{"Content-Type":"application/json"}
        }).catch(function() {
          console.log("erro de servidor");
        }).then(data => data.json())
        .then(obj => myFunc(obj), obj=>Mensagem(obj))
      }

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    }
    
  return (
    <Grid container component="main" sx={{backgroundImage: 'url(/bg1.jpg)', backgroundRepeat:'repeat', backgroundPosition:'center'}} minHeight='100vh' margin={0}>
      <Grid paddingtop={'8vh'} height={1} width={'100vw'}></Grid>
      <Grid item minWidth={'100vw'} component={Paper} elevation={6} square sx={{maxHeight:450}}>
          <Box
              sx={{
                my: 4,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 2 }}>
                <PersonAddOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Criar Utlizador
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Nome"
                  label="Nome Completo"
                  name="Nome"
                  autoComplete="Nome"
                  autoFocus
                  value={nome}
                  onChange={(e)=>setNome(e.target.value)}
                />
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type={passwordType}
                  id="Password"
                  autoComplete="current-name"
                  autoFocus
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={handClick}
                >
                  Criar novo utlizador
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
      </Grid>
 );
}