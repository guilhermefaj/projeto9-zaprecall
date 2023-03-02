import cards from "./cards"
import styled from "styled-components"
import { useState } from "react"

export default function Pergunta(props) {

    return (

        (props.exibirResposta ? (
            <StyledResposta>
                <h2>{props.answer}</h2>
                <BotoesResposta>
                    <NaoLembrei>Não lembrei</NaoLembrei>
                    <QuaseNaoLembrei>Quase não lembrei</QuaseNaoLembrei>
                    <Lembrei>Zap!</Lembrei>
                </BotoesResposta>
            </StyledResposta>
        ) : (
            <StyledPergunta>
                <h2>{props.question}</h2>
                <button onClick={props.virarPergunta}>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_virar.png"} alt={"seta de virar"} />
                </button>
            </StyledPergunta>
        ))
    )
}

const StyledPergunta = styled.section`
    background-color: #FFFFD4;
    display: flex;
    width: 300px;
    min-height: 131px;
    height: fit-content;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 18px;
    padding-bottom: 30px;
    border-radius: 5px;
    position: relative;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    
    font-family: 'Recursive';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #333333;
    button{
        background-color: #FFFFD4;
        position: absolute;
        right: 15px;
        bottom: 6px;
        }
`
const StyledResposta = styled.section`
    
    background-color: #FFFFD4;
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 131px;
    height: fit-content;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 18px;
    padding-bottom: 30px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    font-family: 'Recursive';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #333333;
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