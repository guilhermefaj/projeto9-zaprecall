export default function Respondido() {
    return (
        <>
            <section className={"cardNaoLembrei"}>
                <h2>
                    Pergunta
                </h2>
                <img src={"/projeto__zaprecall__recursos/assets/icone_erro.png"} />
            </section>
            <section className={"cardQuaseNaoLembrei"}>
                <h2>
                    Pergunta
                </h2>
                <img src={"/projeto__zaprecall__recursos/assets/icone_quase.png"} />
            </section>
            <section className={"cardZap"}>
                <h2>
                    Pergunta
                </h2>
                <img src={"/projeto__zaprecall__recursos/assets/icone_certo.png"} />
            </section>
        </>
    )
}