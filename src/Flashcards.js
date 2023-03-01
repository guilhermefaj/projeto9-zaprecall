import { useState } from "react"
import Pergunta from "./Pergunta"
import Resposta from "./Resposta"
import Respondido from "./Respondido"
import cards from "./cards"
import styled from "styled-components"
import { StyledSection } from "./styles"

export default function Flashcards() {
    const [indexPergunta, setIndexPergunta] = useState(0);
    const [exibirPergunta, setExibirPergunta] = useState(false);

    const Flashcards = cards.map((card, i) => {
        return (
            <StyledSection key={i}>
                <h2>Pergunta {i + 1}</h2>
                <PlayButton onClick={virarFlashcard}>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                </PlayButton>
            </StyledSection>
        )
    })

    function virarFlashcard(event) {
        const cardSelecionado = event.currentTarget.parentNode;
        cardSelecionado.classList.add("hidden");
        const randomIndex = Math.floor(Math.random() * cards.length);
        setIndexPergunta(randomIndex);
        setExibirPergunta(true);
    }

    return (
        <Article>
            <Pergunta
                question={cards[indexPergunta].question}
                exibirPergunta={exibirPergunta}
                indexPergunta={indexPergunta}
            />
            <Resposta
                answer={cards[indexPergunta].answer}
            />
            <Respondido />
            {Flashcards}
        </Article>
    )
}

const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-bottom: 90px;
`

const PlayButton = styled.button`
    border: none;
    background-color: white;
    img {
    max-height: 23px;
    }
`

