import React, { useState } from "react";
import './CadastroEvento.css';

function CadastroEvento(){
const[evento, setEvento] = useState({
    placaDoVeiculo: '',
    nomeDoProprietario: '',
    numeroDoApartamento: '',
    bloco: '',
    modeloDoVeiculo: '',
    corDoVeiculo: '',
    numeroDaVaga: ''

});
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEvento({ ...evento, [name]: value});
};
const handleSubmit = (event) => {
    event.preventDefault();
    //Validação dos campos para evitar o cadastro de dados inválidos!
    if (!evento.placaDoVeiculo || !evento.nomeDoProprietario || !evento.numeroDoApartamento || !evento.bloco || !evento.corDoVeiculo || !evento.modeloDoVeiculo || !evento.numeroDaVaga) {
        alert('Preencha todos os campos!');
        return;
    } 
    //Recupera os dados já cadastrados no localStorege!
    const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];

    //Adiciona um novo cadastro ao agendamento da vaga de cadastro.
    eventosCadastrados.push(evento);
localStorage.setItem('eventos', JSON.stringify(eventosCadastrados));


    //Limpa os Campos após realizar um cadastro.
    setEvento({
    placaDoVeiculo: '',
    nomeDoProprietario: '',
    numeroDoApartamento: '',
    bloco: '',
    modeloDoVeiculo: '',
    corDoVeiculo: '',
    numeroDaVaga: ''

    });

    alert('Agendamento Cadastrado com Sucesso!')

};

return(
    <div>
        <h1>Reservar vaga de garagem</h1>
        <form onSubmit={handleSubmit}>

            <label>Placa do Veículo</label>
            <input type="text" name="placaDoVeiculo" value={evento.placaDoVeiculo} onChange={handleInputChange} />

            <label>Nome do Proprietário</label>
            <input type="text" name="nomeDoProprietario" value={evento.nomeDoProprietario} onChange={handleInputChange} />

            <label>Número do Apartamento</label>
            <input type="text" name="numeroDoApartamento" value={evento.numeroDoApartamento} onChange={handleInputChange} />

            <label>Bloco do Apartamento</label>
            <input type="text" name="bloco" value={evento.bloco} onChange={handleInputChange} />
            
            <label>Modelo do Veículo</label>
            <input type="text" name="modeloDoVeiculo" value={evento.modeloDoVeiculo} onChange={handleInputChange} />
             
            <label>Cor do Veículo</label>
            <input type="text" name="corDoVeiculo" value={evento.corDoVeiculo} onChange={handleInputChange} />

            <label>Número da Vaga</label>
            <input type="text" name="numeroDaVaga" value={evento.numeroDaVaga} onChange={handleInputChange} />

 

            <button type="submit">Agendar Vaga</button>

        </form>
    </div>
)


    
}

export default CadastroEvento;