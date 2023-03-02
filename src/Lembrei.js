import styled from "styled-components";

export default function Lembrei(props) {
    return (
        <CardLembrei>
            <h2>Pergunta {props.i}</h2>
            <img src={"/projeto__zaprecall__recursos/assets/icone_certo.png"} />
        </CardLembrei>
    )
}

const StyledSection = styled.section`
    background-color: white;
    display: flex;
    width: 300px;
    height: 65px;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    font-family: 'Recursive';
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #333333;`

const CardLembrei = styled(StyledSection)`
    color: #2FBE34;
    text-decoration: line-through;
`