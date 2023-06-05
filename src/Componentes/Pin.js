import CloseIcon from '@mui/icons-material/Close';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
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

export default function Pin() {
    const [pin, setPin]=React.useState("")
    const [pinType] = React.useState('password');
    const [mensagem, setmensagem]=React.useState('');
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);



    const  Mensagem =(obj)=>{
      if(obj===false)
       setmensagem("Pin Errado");
      else
       setmensagem("Erro de coneção ao servidor");
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
      Mensagem(obj);
      if (obj=== true) {
        navigate('/registo');
        console.log("ok");
        }
      else if (obj=== false){
        Mensagem(obj);
        Click();
        console.log("Pin errado");
        }
      else{
        Mensagem(obj);
        Click();
        console.log("erro server");
      }
    }

    const handClick=(e)=>{
        e.preventDefault();
        const cliente={pin}
        console.log(cliente)
        fetch("http://localhost:8080/Admin/pin", {
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
        pin: data.get('pin'),
      });
    }
    
  return (
    <Grid container component="main" sx={{bgcolor:'lightgrey',justifyContent:'center',alignItems:'center'}} minHeight='100vh' margin={0}>
      <Grid item minWidth={'50vw'} component={Paper} elevation={10} sx={{minHeight:400}} borderRadius={10}>
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
                <KeyOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Admin
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  type={pinType}
                  margin="normal"
                  required
                  fullWidth
                  id="pin"
                  name="pin"
                  autoFocus
                  value={pin}
                  onChange={(e)=>setPin(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={handClick}
                >
                  Autênticação
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
                    <Alert onClose={Close} action={action} severity="warning" sx={{ width: '100%' }}>
                      {mensagem}
                    </Alert>
              </Snackbar>
          </Grid>
      </Grid>
 );
}