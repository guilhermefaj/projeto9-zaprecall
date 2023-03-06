import Flashcards from "./Flashcards";
import styled from "styled-components";
import cards from "./cards";
import { useState } from "react";

export default function App() {

  const [perguntasRespondidas, setPerguntasRespondidas] = useState(0)

  function contaPerguntasRespondidas() {
    setPerguntasRespondidas((estado) => estado + 1)
  }

  return (
    <>
      <Header>
        <img src={"/projeto__zaprecall__recursos/assets/logo.png"} />
        <h1>ZapRecall</h1>
      </Header>
      <Flashcards
        contaPerguntasRespondidas={contaPerguntasRespondidas}
      />
      <Footer>
        {perguntasRespondidas}/{cards.length} Concluídos
      </Footer>
    </>
  );
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 42px;
    margin-bottom: 51px;

    font-family: 'Righteous';
    font-size: 36px;
    color: white;
    img {
      max-height: 60px;
    }
`

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: white;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Recursive';
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`