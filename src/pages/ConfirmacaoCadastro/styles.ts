import styled from "styled-components"
import bgimg9 from "../../assets/background/bg-img-9.png"
import bgimg10 from "../../assets/background/bg-img-10.png"
import bgimg5 from "../../assets/background/bg-img-5.png"


export const StyleCadastro = styled.div`
body{
    font-family: sans-serif;
    padding: 5%;
    background-image: url(${bgimg10}), url(${bgimg9}), url(${bgimg5});
    background-position: left left;
    background-repeat: no-repeat;
    width: 100%;
    hight: 100%;
    margin: 0;
}
div{
    padding: 219px 0 0 300px;
    text-align: right;
}
.confirmacao-cadastro h1{
    font-weight: 600;
    font-size: 40px;
    color: #018762;

}
.confirmacao-cadastro h4 {
    font-weight: 400;
    font-size: 24px;
    color: #2D2D2D;
    margin: 0 auto;
    padding: 40px 0px 40px 0;
}
.confirmacao-cadastro h5{
    font-weight: 400;
    font-size: 24px;
    color: #018762;

}
`