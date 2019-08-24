import React from 'react';
import './App.css';
import Conversor from "./componentes/conversor"
function App() {
  return (
    //::Parte Visual da aplicação:://
    <div className="App">
      <h1>Faça a conversão e fique por dentro dos valores</h1>
      <div className="caixa">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="caixa">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="caixa">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
