import styled from "styled-components";
import bgimg6 from "../../../assets/background/bg-img-6.png";
import bgimg6b from "../../../assets/background/bg-img-6b.png";

export const Container = styled.div`
  body {
    font-family: "Nunito", sans-serif;
    padding: 5%;
    background-image: url(${bgimg6b}), url(${bgimg6});
    background-position: left bottom, left bottom;
    background-repeat: no-repeat;

}

  div {
    padding:10%;
    text-align: right;
  }
  .confirmacao-cadastro h1 {
    font-weight: 600;
    font-size: 40px;
    color: #018762;
  }
  .confirmacao-cadastro h4 {
    font-weight: 400;
    font-size: 24px;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 40px 0px 40px 0;
  }
  .confirmacao-cadastro h5 {
    font-weight: 400;
    font-size: 24px;
    color: #018762;
  }

`;
