import cards from "./cards"
import styled from "styled-components"
import { useEffect, useState } from "react"
import NaoLembrei from "./NaoLembrei"
import QuaseNaoLembrei from "./QuaseNaoLembrei"
import Lembrei from "./Lembrei"

export default function Pergunta(props) {

    const [resultado, setResultado] = useState(undefined);

    const opcoesResposta = {
        naoLembrei: <NaoLembrei
            i={props.i + 1} />,
        quaseNaoLembrei: <QuaseNaoLembrei
            i={props.i + 1} />,
        lembrei: <Lembrei
            i={props.i + 1} />
    }

    function clickNaoLembrei() {
        setResultado("naoLembrei");
        props.contaPerguntasRespondidas();
    }

    function clickQuaseNaoLembrei() {
        setResultado("quaseNaoLembrei");
        props.contaPerguntasRespondidas();
    }

    function clickLembrei() {
        setResultado("lembrei");
        props.contaPerguntasRespondidas();
    }

    if (
        resultado !== undefined
    ) {
        return opcoesResposta[resultado]
    }

    if (
        !props.estaSelecionado
    ) {
        return (
            <StyledSection data-test="flashcard">
                <h2 data-test="flashcard-text">Pergunta {props.i + 1}</h2>
                <PlayButton data-test="play-btn" onClick={() => props.virarFlashcard()}>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                </PlayButton>
            </StyledSection>
        )
    }

    return (
        (props.exibirResposta ? (
            <StyledResposta>
                <h2 data-test="flashcard-text">{props.answer}</h2>
                <BotoesResposta>
                    <ButtonNaoLembrei data-test="no-btn" onClick={clickNaoLembrei}>Não lembrei</ButtonNaoLembrei>
                    <ButtonQuaseNaoLembrei data-test="partial-btn" onClick={clickQuaseNaoLembrei}>Quase não lembrei</ButtonQuaseNaoLembrei>
                    <ButtonLembrei data-test="zap-btn" onClick={clickLembrei}>Zap!</ButtonLembrei>
                </BotoesResposta>
            </StyledResposta>
        ) : (
            <StyledPergunta>
                <h2 data-test="flashcard-text">{props.question}</h2>
                <button onClick={props.virarPergunta}>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_virar.png"} alt={"seta de virar"} />
                </button>
            </StyledPergunta>
        ))
    )
}


const StyledSection = styled.section`
    background-color: white;
    display: flex;
    width: 300px;
    height: 65px;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    font-family: 'Recursive';
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #333333;
`;

const PlayButton = styled.button`
    border: none;
    background-color: white;
    img {
    max-height: 23px;
    }
`

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

const ButtonNaoLembrei = styled.button`
    background-color: red;
    padding-right: 10px;
    padding-left: 10px;
`

const ButtonQuaseNaoLembrei = styled.button`
    background-color: #FF922E;
`

const ButtonLembrei = styled.button`
    background-color: #2FBE34;
`