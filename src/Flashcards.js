import { useState } from "react"
import Pergunta from "./Pergunta"
import Resposta from "./Resposta"
import Respondido from "./Respondido"
import cards from "./cards"
import styled from "styled-components"

export default function Flashcards() {
    const [indexCard, setIndexCard] = useState(0);
    const [exibirPergunta, setExibirPergunta] = useState(false);
    const [cardsOcultos, setCardsOcultos] = useState([]);
    const [cardSelecionado, setCardSelecionado] = useState(null);
    const [exibirResposta, setExibirResposta] = useState(false);

    function virarFlashcard(index) {
        setIndexCard(index);
        setCardSelecionado(index);
        setExibirPergunta(true);
        setCardsOcultos([...cardsOcultos, index]);
    }

    function virarPergunta() {
        setExibirResposta(true);
    }


    return (
        <Article>

            <Respondido />
            {cards.map((card, i) => {
                return (
                    <StyledSection key={i}>
                        {cardSelecionado === i ?
                            (exibirResposta ? (
                                <Resposta
                                    answer={cards[indexCard].answer}
                                    exibirResposta={exibirResposta}
                                />
                            ) : (
                                <Pergunta
                                    question={cards[indexCard].question}
                                    exibirPergunta={exibirPergunta}
                                    indexCard={indexCard}
                                    exibirResposta={exibirResposta}
                                    virarPergunta={virarPergunta}
                                />
                            ))

                            : (
                                <>
                                    <h2>Pergunta {i + 1}</h2>
                                    <PlayButton onClick={() => virarFlashcard(i)}>
                                        <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                                    </PlayButton>
                                </>
                            )}
                    </StyledSection>
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

