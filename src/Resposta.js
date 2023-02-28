export default function Resposta() {
    return (
        <section className={"cardVirado hidden"}>
            <h2>Uma extensão de linguagem do JavaScript</h2>
            <div className={"botoesResposta"}>
                <button className={"naoLembrei"}>Não lembrei</button>
                <button className={"quaseNaoLembrei"}>Quase não lembrei</button>
                <button className={"zap"}>Zap!</button>
            </div>
        </section>
    )
}