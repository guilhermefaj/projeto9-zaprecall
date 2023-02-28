export default function App() {

  return (
    <div className="App">
      <header>
        <img src={"/projeto__zaprecall__recursos/assets/logo.png"} />
        <h1>ZapRecall</h1>
      </header>
      <article>
        <section className={"cardAberto"}>
          <h2>O que é JSX?</h2>
          <button>
            <img src={"/projeto__zaprecall__recursos/assets/seta_virar.png"} />
          </button>
        </section>
        <section className={"cardVirado"}>
          <h2>Uma extensão de linguagem do JavaScript</h2>
          <div className={"botoesResposta"}>
            <button className={"naoLembrei"}>Não lembrei</button>
            <button className={"quaseNaoLembrei"}>Quase não lembrei</button>
            <button className={"zap"}>Zap!</button>
          </div>
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
        <section className={"cardFechado"}>
          <h2>Pergunta</h2>
          <button>
            <img src={"/projeto__zaprecall__recursos/assets/seta_play.png"} />
          </button>
        </section>
      </article>
      <footer>
        1/2 Concluídos
      </footer>
    </div>
  );
}
