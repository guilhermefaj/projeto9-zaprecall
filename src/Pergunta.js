import cards from "./cards"
import styled from "styled-components"
import { useState } from "react"

export default function Pergunta(props) {

    return (
        <StyledPergunta>
            <h2>{props.question}</h2>
            <button onClick={props.virarPergunta}>
                <img src={"/projeto__zaprecall__recursos/assets/seta_virar.png"} alt={"seta de virar"} />
            </button>
        </StyledPergunta>
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