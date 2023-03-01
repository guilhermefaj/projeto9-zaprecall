import styled from "styled-components"
import { StyledSection } from "./styles"

export default function Respondido() {
    return (
        <>
            <CardNaoLembrei>
                <h2>
                    Pergunta
                </h2>
                <img src={"/projeto__zaprecall__recursos/assets/icone_erro.png"} />
            </CardNaoLembrei>
            <CardQuaseNaoLembrei>
                <h2>
                    Pergunta
                </h2>
                <img src={"/projeto__zaprecall__recursos/assets/icone_quase.png"} />
            </CardQuaseNaoLembrei>
            <CardLembrei>
                <h2>
                    Pergunta
                </h2>
                <img src={"/projeto__zaprecall__recursos/assets/icone_certo.png"} />
            </CardLembrei>
        </>
    )
}

const CardNaoLembrei = styled(StyledSection)`
    color: #FF3030;
    text-decoration: line-through;
`

const CardQuaseNaoLembrei = styled(StyledSection)`
    color: #FF922E;
    text-decoration: line-through;
`

const CardLembrei = styled(StyledSection)`
    color: #2FBE34;
    text-decoration: line-through;
`