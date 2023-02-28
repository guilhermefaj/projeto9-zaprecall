import cards from "./cards"

export default function Pergunta(props) {

    return (
        <section className={props.exibirPergunta ? "cardAberto" : "hidden"}>
            <h2>{props.question}</h2>
            <button>
                <img src={"/projeto__zaprecall__recursos/assets/seta_virar.png"} alt={"seta de virar"} />
            </button>
        </section>
    )
}