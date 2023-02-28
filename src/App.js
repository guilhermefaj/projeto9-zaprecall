import Flashcards from "./Flashcards";

export default function App() {

  return (
    <div className="App">
      <header>
        <img src={"/projeto__zaprecall__recursos/assets/logo.png"} />
        <h1>ZapRecall</h1>
      </header>
      <Flashcards />
      <footer>
        1/2 Concluídos
      </footer>
    </div>
  );
}

function Resposta() {
  return (
    <section className={"cardVirado"}>
      <h2>Uma extensão de linguagem do JavaScript</h2>
      <div className={"botoesResposta"}>
        <button className={"naoLembrei"}>Não lembrei</button>
        <button className={"quaseNaoLembrei"}>Quase não lembrei</button>
        <button className={"zap"}>Zap!</button>
      </div>
    </section>
  )
}

function Respondido() {
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