import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/popper.js/dist/popper.min';

import '../node_modules/jquery/dist/jquery.min';

import { Menu } from './componentes/menu';
import { Rotas } from './componentes/rotas';

function App() {
  return (
    <div>
      <Menu />
      <Rotas />
    </div>
    );
  }
  
  export default App;
