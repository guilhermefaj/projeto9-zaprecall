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