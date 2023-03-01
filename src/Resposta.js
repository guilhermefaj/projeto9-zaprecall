import styled from "styled-components"
import { StyledSection } from "./styles"


export default function Resposta() {
    return (
        <StyledResposta>
            <h2>Uma extensão de linguagem do JavaScript</h2>
            <BotoesResposta>
                <NaoLembrei>Não lembrei</NaoLembrei>
                <QuaseNaoLembrei>Quase não lembrei</QuaseNaoLembrei>
                <Lembrei>Zap!</Lembrei>
            </BotoesResposta>
        </StyledResposta>
    )
}

const StyledResposta = styled(StyledSection)`
    background-color: #FFFFD4;
    min-height: 131px;
    font-weight: 400;
    align-items: flex-start;
    padding-top: 18px;
    padding-bottom: 30px;
    height: fit-content;
    flex-direction: column;
`

const BotoesResposta = styled.div`
    display: flex;
    gap: 7px;
    margin-top: 10px;
    margin-left: -5px;
    margin-bottom: -15px;
    button{
        height: 37px;
        width: 85px;
        border-radius: 5px;

        font-family: 'Recursive';
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: white;
    }
`

const NaoLembrei = styled.button`
    background-color: red;
    padding-right: 10px;
    padding-left: 10px;
`

const QuaseNaoLembrei = styled.button`
    background-color: #FF922E;
`

const Lembrei = styled.button`
    background-color: #2FBE34;
`