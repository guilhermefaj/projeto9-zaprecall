import { useState } from "react"
import Pergunta from "./Pergunta"
import Resposta from "./Resposta"
import Respondido from "./Respondido"
import cards from "./cards"

export default function Flashcards() {
    const [indexCard, setIndexCard] = useState(0);
    const [exibirPergunta, setExibirPergunta] = useState(false);
    const [cardClicado, setCardClicado] = useState(null)

    function virarFlashcard(event) {
        const cardSelecionado = event.currentTarget.parentNode;
        cardSelecionado.classList.add("hidden");
        const randomIndex = Math.floor(Math.random() * cards.length);
        setIndexCard(randomIndex);
        setExibirPergunta(true);
    }

    return (
        <article>
            <Pergunta
                question={cards[indexCard].question}
                exibirPergunta={exibirPergunta}
                indexCard={indexCard}
            />
            <Resposta
                answer={cards[indexCard].answer}
            />
            <Respondido />
            <section className={"cardFechado"}>
                <h2>Pergunta 1</h2>
                <button onClick={virarFlashcard}>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                </button>
            </section>
            <section className={"cardFechado"}>
                <h2>Pergunta 2</h2>
                <button onClick={virarFlashcard}>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                </button>
            </section>
            <section className={"cardFechado"}>
                <h2>Pergunta 3</h2>
                <button onClick={virarFlashcard}>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                </button>
            </section>
        </article>
    )
}