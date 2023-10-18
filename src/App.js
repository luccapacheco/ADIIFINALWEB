import './App.css';
import React,{useState} from 'react';


import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CadastroEvento from './pages/CadastroEventos';
import ListaEventos from './pages/ListaEventos';
import DetalheEventos from './pages/DetalhesEvento';
import AlteracaoEvento from './pages/AlteracaoEvento';





function App() {
  

  return(
  <div className='app'>
    <Header />
          
    <main>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cadastro' element={<CadastroEvento />} />
        <Route exact path='/lista' element={<ListaEventos />} />
        <Route exact path='/detalhes/:id' element={<DetalheEventos />} />
        <Route exact path='/alteracao/:id' element={<AlteracaoEvento />} />
        
        
        
        

      </Routes>
    </main>

    <Footer />
     
  </div> 
  );
}

export default App;
