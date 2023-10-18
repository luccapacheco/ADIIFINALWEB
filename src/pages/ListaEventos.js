import React from "react";
import { useNavigate } from "react-router-dom";

function ListaEventos(){
    const navigate = useNavigate();
    //Recupera os agendamentos cadastrados.
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    const handleDetalhes = (id) => {
        navigate(`/detalhes/${id}`);
    };

    const handleAlteracao = (id) => {
        navigate(`/alteracao/${id}`);
    };
    
    const handleExclusao =(id) => {
        //Filtra os agendamentos para pode excluir o agendamento pelo ID informado.
        const eventosAtualizados = eventos.filter((evento, index) => index !== id);

         //Atualiza o LocalStorage com o array do agendamento atualizado.
    localStorage.setItem('eventos', JSON.stringify(eventosAtualizados));

    alert('Agendamento excluido com sucesso!');
    window.location.reload();

    };
    
   

    

    return(
        <div>
            <h1>Vagas de Estacionamento Reservadas</h1>
            <ul>
                {eventos.map((evento, index) =>(
                    <li key={index}>
                        <p>Placa do Veículo: {evento.placaDoVeiculo}</ p>
                        <p>Nome do Proprietário: {evento.nomeDoProprietario}</p>
                        <p>Número do Apartamento: {evento.numeroDoApartamento}</p>
                        <p>Bloco: {evento.bloco}</p>
                        <p>Modelo do Veículo: {evento.modeloDoVeiculo}</p>
                        <p>Cor do Veículo: {evento.corDoVeiculo}</p>
                        <p>Número da Vaga: {evento.numeroDaVaga}</p>
                        <button onClick={() => handleDetalhes(index)}>Detalhes</button>
                        <button onClick={() => handleAlteracao(index)}>Alterar</button>
                        <button onClick={() => handleExclusao(index)}>Excluir</button>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaEventos;