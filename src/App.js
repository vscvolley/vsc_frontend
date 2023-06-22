import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Alterar from "./Componentes/Alterar.js";
import Interface from './Componentes/Interface.js';
import Login from './Componentes/Login.js';
import Pin from './Componentes/Pin.js';
import Recuperacao from './Componentes/Recuperacao';
import Registo from './Componentes/Registo';
import Perfil from './Componentes/Utilizador/Perfil.js';
import Challenge from './Componentes/landpage/Challenge.js';
import MapasDiv from './Componentes/landpage/MapasDiv.js';
import Registos from './Componentes/landpage/Registos.js';
import Relatorios from "./Componentes/landpage/Relatorios.js";
import RegistosOutras from "./Componentes/landpage/Sub_Registos/RegistoOutras.js";
import RegistosEquipas from "./Componentes/landpage/Sub_Registos/RegistosEquipa.js";

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="interface" element={<Interface/>} />
              <Route path="challenge" element={<Challenge />} />
              <Route path="mapas" element={<MapasDiv />} />
              <Route path="registos" element={<Registos />} />
                <Route path="registosOutras" element={<RegistosOutras/>} />
                <Route path="registosEquipas" element={<RegistosEquipas/>} />
              <Route path="relatorios" element={<Relatorios/>} />
                  <Route path="perfil" element={<Perfil/>} />
        <Route path='pin' element={<Pin/>}/>
          <Route path='registo' element={<Registo/>}/>
        <Route path="recuperacao" element={<Recuperacao/>} />
          <Route path='alterar' element={<Alterar/>}/>
      </Routes>
    </div>
  );
}

export default App;
