import styled from "styled-components";
import bgimg9 from "../../assets/background/bg-img-9.png";
import bgimg10 from "../../assets/background/bg-img-10.png";

export const StyleConfirmacaoInscricao = styled.div`
body{
    font-family:'nunito', sans-serif;
    padding: 5%;
    background-image: url(${bgimg10}), url(${bgimg9});
    background-position: left left;
    background-repeat: no-repeat;
    width: 100%;
    hight: 100%;
    margin: 0;
    padding: 0;
    text-align: end;
    weight: 685px;
}
.confirmacao-inscricao{
    padding: 261px 94px 0 587px;
}
.confirmacao-inscricao h1{
    color: #018762;
    font-weight: 600;
    fonte-size: 40px;
    line-height: 60px;
}
.confirmacao-inscricao h4{
    font-weight:400;
    font-size:24px;
    line-height: 36px;
}
.confirmacao-inscricao button{
    width: 250px;
    height: 48px;
    margin-top: 80px;
    margin-left: 15%;
    font-weight: 700;
    font-size: 18px;
    border-radius: 8px;
    border-style: solid;
    box-shadow: 0 1px 3px 0 black;
    background-color: #018762;
    color:#fff;
    border: none;
}
`