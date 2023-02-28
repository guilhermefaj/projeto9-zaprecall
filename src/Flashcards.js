import { useState } from "react"
import Pergunta from "./Pergunta"
import Resposta from "./Resposta"
import Respondido from "./Respondido"
import cards from "./cards"

export default function Flashcards() {
    const [indexPergunta, setIndexPergunta] = useState(0);
    const [exibirPergunta, setExibirPergunta] = useState(false);

    const Flashcards = []

    for (let i = 0; i < cards.length; i++) {
        Flashcards.push(
            <section key={i} className={"cardFechado"}>
                <h2>Pergunta {i + 1}</h2>
                <button onClick={virarFlashcard}>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                </button>
            </section>
        )
    }

    function virarFlashcard(event) {
        const cardSelecionado = event.currentTarget.parentNode;
        cardSelecionado.classList.add("hidden");
        const randomIndex = Math.floor(Math.random() * cards.length);
        setIndexPergunta(randomIndex);
        setExibirPergunta(true);
    }

    return (
        <article>
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
        </article>
    )
}