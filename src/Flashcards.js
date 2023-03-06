import { useState } from "react"
import Pergunta from "./Pergunta"
import cards from "./cards"
import styled from "styled-components"


export default function Flashcards(props) {
    const [exibirPergunta, setExibirPergunta] = useState(false);
    const [cardSelecionado, setCardSelecionado] = useState(null);
    const [exibirResposta, setExibirResposta] = useState(false);

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
                    <Pergunta
                        question={cards[i].question}
                        answer={cards[i].answer}
                        exibirPergunta={exibirPergunta}
                        i={i}
                        exibirResposta={exibirResposta}
                        virarPergunta={virarPergunta}
                        estaSelecionado={cardSelecionado === i}
                        virarFlashcard={() => virarFlashcard(i)}
                        contaPerguntasRespondidas={props.contaPerguntasRespondidas}
                    />
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


