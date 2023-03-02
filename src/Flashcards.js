import { useState } from "react"
import Pergunta from "./Pergunta"
import NaoLembrei from "./NaoLembrei"
import QuaseNaoLembrei from "./QuaseNaoLembrei"
import Lembrei from "./Lembrei"
import cards from "./cards"
import styled from "styled-components"
import opcoesResposta from "./opcoes"

export default function Flashcards() {
    const [exibirPergunta, setExibirPergunta] = useState(false);
    const [cardSelecionado, setCardSelecionado] = useState(null);
    const [exibirResposta, setExibirResposta] = useState(false);
    const [resultado, setResultado] = useState(undefined);

    const opcoesResposta = {
        naoLembrei: <NaoLembrei
            i={cardSelecionado + 1} />,
        quaseNaoLembrei: <QuaseNaoLembrei
            i={cardSelecionado + 1} />,
        lembrei: <Lembrei
            i={cardSelecionado + 1} />
    }

    function virarFlashcard(index) {
        setCardSelecionado(index);
        setExibirPergunta(true);
        setExibirResposta(false)
    }

    function virarPergunta() {
        setExibirResposta(true);
        setExibirPergunta(false)
    }

    return (
        <Article>
            {cards.map((card, i) => {
                return (
                    (resultado !== undefined ? (opcoesResposta[resultado]) : (
                        cardSelecionado === i ? (
                            <Pergunta
                                question={cards[i].question}
                                answer={cards[i].answer}
                                exibirPergunta={exibirPergunta}
                                i={i}
                                exibirResposta={exibirResposta}
                                virarPergunta={virarPergunta}
                                resultado={resultado}
                                setResultado={setResultado}
                            />
                        ) : (
                            <StyledSection>
                                <h2>Pergunta {i + 1}</h2>
                                <PlayButton onClick={() => virarFlashcard(i)}>
                                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                                </PlayButton>
                            </StyledSection>
                        )
                    ))
                )
            })}
        </Article >
    )
}

const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-bottom: 90px;
`

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

