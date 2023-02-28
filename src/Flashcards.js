import Pergunta from "./Pergunta"
import Resposta from "./Resposta"
import Respondido from "./Respondido"

export default function Flashcards() {
    return (
        <article>
            <Pergunta />
            <Resposta />
            <Respondido />
            <section className={"cardFechado"}>
                <h2>Pergunta</h2>
                <button>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                </button>
            </section>
            <section className={"cardFechado"}>
                <h2>Pergunta</h2>
                <button>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                </button>
            </section>
            <section className={"cardFechado"}>
                <h2>Pergunta</h2>
                <button>
                    <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
                </button>
            </section>
        </article>
    )
}