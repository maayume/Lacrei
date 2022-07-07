import styled from "styled-components";
import bgimg3 from "../../assets/background/bg-img-3.png";
import bgimg4 from "../../assets/background/bg-img-4.png";


export const FormCadastro = styled.div`
  .container2  {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .body {
    font-family: "Nunito", sans-serif;
    padding: 5%;
    background-image: url(${bgimg3}),url(${bgimg4});
    background-position: right bottom, left bottom;
    background-repeat: no-repeat;
    background-size: auto;
  }

  h3 {
    padding: 0 0 50px 10px;
    color: #018762;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0em;
  }
  .btn {
    background-color: #cfcfcf;
    background-color: #018762;
    font-weight: bold;
    padding: 10px 32px;
    box-shadow: 0px 1px 3px 0px #0000001a;
  }
  p {
    color: #018762;
    font-size: 20px;
  }
  .inputNome{
    padding-bottom: 20px;
  }
  .row>*{
    padding-right: 0;
  }
  .subtitulo{
    padding-top: 30px;
  }
  .form-label{
    display: flex;
    flex-direction: row;

  }
  .form-default {
    width: 40vh;
    padding: 0px;
    margin: -8px;
  }
  .bFkQZp .form-default {
    width: 0px;
  }
  .button_end {
    display:flex;
    justify-content: center;
  }
  
`;
