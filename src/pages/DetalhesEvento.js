import React, { useEffect, useState,} from "react";
import { useNavigate, useParams } from "react-router-dom";
import './DetalheEvento.css'
function DetalheEventos() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [evento, setEvento] = useState(null);

    useEffect(() => {const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];
    const eventoEncontrado = eventosCadastrados.find((evento, index) => index === Number(id));
    if (eventoEncontrado) {
        setEvento(eventoEncontrado);
    }else{
        alert('Reserva de vaga não encontrada!');
        navigate('/lista');
    }

}, [id, navigate]);

return(
    <div>
        <h1>Detalhe do Reserva do Estacionamento</h1>
        {evento ? (
            <div>
                
                <p>Nome do Proprietário: {evento.nomeDoProprietario}</p>
                <p>Modelo do Veículo: {evento.modeloDoVeiculo}</p>
                <p>Placa do Veículo: {evento.placaDoVeiculo}</p>
                <p>Cor: {evento.coroDoVeiculo}</p>
                <p>Número da Vaga: {evento.numeroDaVaga}</p>
            </div>
        ): null}
    </div>
);

}

export default DetalheEventos;