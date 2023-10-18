import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AlteracaoEvento.css'

function AlteracaoEvento() {
    const navigate =  useNavigate();
    const {id} = useParams();
    const [evento, setEvento] = useState({
    placaDoveiculo: '',
    nomeDoProprietario: '',
    numeroDoApartamento: '',
    bloco: '',
    modeloDoVeiculo: '',
    corDoVeiculo: '',
    numeroDaVaga: ''
    });

    useEffect(() => {
        //Recupera o agendamento pela ID a partir do LocalStorage.
        const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];
        const eventoEncontrado = eventosCadastrados.find((evento, index) => index === Number(id));
        if (eventoEncontrado) {
            setEvento(eventoEncontrado);
        }else{
            alert('Reserva de vaga não encontrado!');
            navigate('/lista');
        }

    }, [id, navigate]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEvento({ ...evento, [name]: value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //Validação dos campos para evitar o cadastro de dados inválidos!
        if (!evento.placaDoveiculo || !evento.nomeDoProprietario || !evento.numeroDoApartamento || !evento.bloco || !evento.corDoVeiculo || !evento.modeloDoVeiculo || !evento.numeroDaVaga) {
            alert('Preencha todos os campos!');
            return;
        } 

        //Recupera os dados já cadastrados no localStorege!
    const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];

    //Encontra o índice do agendamento no Array.
    const eventoIdex = eventosCadastrados.findIndex((evento, index) => index === Number(id));

    //Verefica se o agendamento foi encontrado
    if (eventoIdex !== -1) {
        //Atualiza o agendamento no array.
        eventosCadastrados[eventoIdex] = evento;

    //Atualiza o LocalStorage com o array do agendamento atualizado.
    localStorage.setItem('eventos', JSON.stringify(eventosCadastrados));
    
    alert('Reserva de vaga alterado com sucesso!');
    navigate ('/lista');
    }else{
        alert('Reserva de vaga não encontrado!');
        navigate ('/lista');
    }
};

return(
    <div>
        <h1>Agendamento de vaga de garagem</h1>
        <form onSubmit={handleSubmit}>
            <label>Placa Do Veículo</label>
            <input type="text" name="placadoVeiculo" value={evento.placaDoveiculo} onChange={handleInputChange} />

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

            
            <button type="submit">Alterar Agendamento</button>

        </form>
    </div>
);

}

export default AlteracaoEvento;