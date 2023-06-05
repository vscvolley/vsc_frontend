import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Grid, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { default as Button } from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";
import { NavLink } from 'react-router-dom';


function Perfil() {

  const [nome,setnome]=React.useState("");
  const [email,setemail]=React.useState("");
  const [admin,setadmin]=React.useState("");

fetch('http://localhost:8080/Clientes/nome',{
  method:'GET',
  mode: 'cors',
}).catch(function() {
  console.log("erro de servidor");
}).then(data => data.text())
.then(obj => setnome(obj))


fetch('http://localhost:8080/Clientes/email',{
  method:'GET',
  mode: 'cors',
}).catch(function() {
  console.log("erro de servidor");
}).then(data => data.text())
.then(obj => setemail(obj))


const  myfunc =(obj)=>{
  if(obj===true) {
    setadmin("Sim");
  }
  else 
    setadmin("Não");

}

fetch('http://localhost:8080/Clientes/email',{
  method:'GET',
  mode: 'cors',
}).catch(function() {
  console.log("erro de servidor");
}).then(data => data.text())
.then(obj => myfunc(obj))


  return (
    <Grid container component="main"
      minHeight={'100vh'} minWidth={'100vw'} sx={{ justifyContent: 'center', alignItems: 'center', backgroundImage: 'url(https://img.freepik.com/premium-vector/silhouette-male-volleyball-player-jumping-hit-ball_9955-1144.jpg?w=900)', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}
    >
      <Grid item height={'50vh'} width={'50vw'} elevation={5} borderRadius={3} component={Paper}>
        <Grid item minWidth={'50vw'}  sx={{justifyContent:'center',alignItems:'center', paddingLeft:37}} minHeight={'7vh'} paddingTop={'1vh'}>
            <Avatar sx={{ minHeight: '5vh',}} >
                <AccountCircleSharpIcon />
            </Avatar>
        </Grid>
        <Grid minHeight={'1vh'}></Grid>
        <Grid item maxWidth={'50vw'} sx={{justifyContent:'left',alignItems:'left', paddingTop:'4vh'}} bgcolor={'lightgrey'} elevation={5} borderRadius={0.5} minHeight={'40vh'}>
            <Typography minHeight={'1vh'} component="h5" variant='h5'  align='left' paddingLeft={'1vw'} >
            Nome: {nome}
            </Typography>
            <br/>
            <Typography minHeight={'1vh'}  component="h5" variant='h5'  align='left' paddingLeft={'1vw'}>
            Email: {email}
            </Typography>
            <br/>
            <Typography minHeight={'1vh'}  component="h5" variant='h5'  align='left' paddingLeft={'1vw'}>
            Admin: {admin}
            </Typography>
        </Grid>
        <div className="button" style={{bottom:'10px',left:'10px',position:'fixed', background:'lightblue',border:'none', borderRadius:4}}>
                  <Button size='small'>
                    <NavLink to="/interface" style={{color:'white',textDecoration: 'none'}}>
                        Voltar
                    </NavLink>
                  </Button>
            </div>
      </Grid>

    </Grid>
  )
}

export default Perfil;