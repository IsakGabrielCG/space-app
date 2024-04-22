import styled from "styled-components";
import Campotexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    img{
        max-width: 212px;
    }
    
`

const Cabecario = ({setFiltro}) => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="Logo" />
            <Campotexto setFiltro={setFiltro}/>
        </HeaderEstilizado>
    )
}

export default Cabecario;