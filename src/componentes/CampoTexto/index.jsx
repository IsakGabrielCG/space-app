import styled from "styled-components"
import search from "./search.png"


const ContainerEstilizado = styled.div`
    position: relative; // O position: relative; é necessário para que o position: absolute; do ícone funcione corretamente.
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;// O line-height: 20px; é necessário para que o texto fique centralizado verticalmente no campo de texto.
`

const IconeLupa = styled.img`
    position: absolute;// O position: absolute; é necessário para que o ícone fique sobre o campo de texto.
    top: 10px;
    right: 10px;// O right: 10px; é necessário para que o ícone fique no canto direito do campo de texto.
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({ setFiltro }) => {

    
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado 
            onChange={(evento) => { setFiltro(evento.target.value) }} 
            type="text" 
            placeholder="O que você procura?"/>
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto
