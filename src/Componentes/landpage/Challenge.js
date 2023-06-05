
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Grid } from '@mui/material';
import { default as Button } from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.highlighted': { 
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  maxWidth: 800,
  flex: '0 0 70%',
}));

const Text = styled('p')({
  fontSize: '18px',
});


function createData(nomeE, nJogos, pontos, vitorias, derrotas, pctV) {
  return { nomeE, nJogos, pontos, vitorias, derrotas, pctV };
}

const rows = [
  createData('A. J. F. Bastardo', 13, 38, 13, 0, 100),
  createData('Benfica', 13, 33, 11, 2, 84.6),
  createData('Leixões', 13, 32, 11, 2, 84.6),
  createData('Esmoriz GC', 13, 31, 10, 3, 76.9),
  createData('Sporting CP', 13, 26, 9, 4, 69.2),
  createData('Castelo Maia GC', 13, 22, 8, 5, 61.5),
  createData('Vitória SC', 13, 20, 6, 7, 46.2),
  createData('Académica de Espinho', 13, 17, 6, 7, 46.2),
  createData('Ala de Gondomar', 13, 17, 6, 7, 46.2),
  createData('Viana', 13, 9, 2, 11, 15.4),
  createData('Sporting de Espinho', 13, 8, 3, 10, 23.1),
  createData('Académica São Mamede', 13, 8, 3, 10, 23.1),
  createData('SC Caldas', 13, 7, 2, 11, 15.4),
  createData('Santo Tirso', 13, 5, 1, 12, 7.7),
];

const ordenarClassificacao = () => {
  rows.sort((a, b) => b.pontos - a.pontos);
  rows.forEach((row, index) => {
    row.posicao = index + 1;
  });
};

function Challenge() {
  ordenarClassificacao();

  return (
    <Grid
      container
      component="main"
      sx={{
        backgroundImage: 'url(/bg1.jpg)',
        backgroundPosition: 'center',
        overflowX: 'hidden',
        overflowY: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      minHeight="100vh"
      margin={0}
    >
      <Grid
        container
        component={Paper}
        elevation={5}
        borderRadius={0}
        bgcolor="#41a5f5"
        width="100vw"
        minHeight="8vh"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <Typography component={'span'} fontSize="2.5rem" variant="h3" fontFamily="sans-serif">
          <EmojiEventsIcon sx={{ marginRight: '0.5rem', fontSize: '2.5rem' }} /> Challenge
        </Typography>
      </Grid>
      <Grid container minHeight={'4vh'}></Grid>
      <Grid container display={'flex'} justifyContent={'center'} alignContent={'center'} minWidth={'100vw'} minHeight={'85vh'}>
        <StyledTableContainer component={Paper} sx={{ maxWidth: '50vw' }}>
          <Table sx={{ maxWidth: '50vw' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">#</StyledTableCell>
                <StyledTableCell align="center">Equipa</StyledTableCell>
                <StyledTableCell align="center">PJ</StyledTableCell>
                <StyledTableCell align="center">Pts&nbsp;</StyledTableCell>
                <StyledTableCell align="center">V&nbsp;</StyledTableCell>
                <StyledTableCell align="center">D&nbsp;</StyledTableCell>
                <StyledTableCell align="center">%V&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.nomeE}
                  className={row.nomeE === 'Vitória SC' ? 'highlighted' : ''}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.posicao}
                  </TableCell>
                  <TableCell align="left">{row.nomeE}</TableCell>
                  <TableCell align="center">{row.nJogos}</TableCell>
                  <TableCell align="center">{row.pontos}</TableCell>
                  <TableCell align="center">{row.vitorias}</TableCell>
                  <TableCell align="center">{row.derrotas}</TableCell>
                  <TableCell align="center">{row.pctV}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
        <Grid minWidth={'2vw'} minHeight={'2vh'}></Grid>
        <StyledTableContainer component={Paper} sx={{ maxWidth: '30vw' }}>
          <TableContainer>
            <Table>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" align='center'>
                    <Text>Análise Vitória SC</Text>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <Text>Lugar possível em caso de vitória por 3-0/3-1: 3º</Text>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                  <Text>Lugar possível em caso de vitória por 3-2: 4º</Text>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                  <Text>Lugar possível em caso de derrota por 2-3: 4º</Text>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                  <Text>Lugar possível em caso de derrota por 3-1/3-0: 5º</Text>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                  <Text>Descrição:</Text>
                  <Text> - Estes lugares são calculados em caso de derrota dos concorrentes diretos;</Text>
                  <Text> - Vitória por 3-0 ou 3-1 o Vitória SC recebe 3 pontos;</Text>
                  <Text> - Vitória por 3-2 o Vitória SC recebe 2 pontos;</Text>
                  <Text> - Derrota por 2-3 o Vitória SC recebe 1 ponto;</Text>
                  <Text> - Derrota por 0-3 ou 1-3 o Vitória SC não recebe pontos.</Text>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </StyledTableContainer>
      </Grid>
      <div  className="button" style={{bottom:'10px',left:'10px',position:'fixed', background:'lightblue',border:'none', borderRadius:4}}>
                  <Button size='small'>
                    <NavLink to="/interface" style={{color:'white',textDecoration: 'none'}}>
                        Voltar
                    </NavLink>
                  </Button>
            </div>
    </Grid>
  );
}


export default Challenge;

