import cards from "./cards"
import styled from "styled-components"
import { StyledSection } from "./styles"

export default function Pergunta(props) {

    return (
        <StyledPergunta className={props.exibirPergunta ? "cardAberto" : "hidden"}>
            <h2>{props.question}</h2>
            <button>
                <img src={"/projeto__zaprecall__recursos/assets/seta_virar.png"} alt={"seta de virar"} />
            </button>
        </StyledPergunta>
    )
}

const StyledPergunta = styled(StyledSection)`
&.cardAberto{
    background-color: #FFFFD4;
    min-height: 131px;
    font-weight: 400;
    align-items: flex-start;
    padding-top: 18px;
    padding-bottom: 30px;
    height: fit-content;
    position: relative;
    button{
        background-color: #FFFFD4;
        position: absolute;
        right: 15px;
        bottom: 6px;
        }
}
`