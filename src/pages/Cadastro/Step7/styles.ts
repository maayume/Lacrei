import styled from "styled-components";

import bgimg5 from "../../../assets/background/bg-img-5.png";


export const FormCadastro = styled.div`
  .container2  {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .body4 {
    font-family: "Nunito", sans-serif;
    padding: 1%;
    background-image: url(${bgimg5});
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
  .btn2 {
    background-color: #018762;
    background-color: white;
    font-weight: bold;
    padding: 10px 32px;
    box-shadow: 0px 1px 3px 0px #0000001a;
    color: #018762;
    border:2px solid #018762;
    border-radius: 5px;
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
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    padding-top: 30px;
  }
  .exampleCheck4 {
    margin: 0;
    padding: 0px;
  }
  .colcard1 {
    margin: 0 10px;
    padding: 0px 10px 0 0;
    display: flex;
    text-align: left;

  }
  .form-label{
    display: flex;
    flex-direction: row;

  }
  .form-default {
    width: 100%;
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
  .button_end2 {
    display:flex;
    justify-content: center;
    margin-top: 20px;
    margin-left: 1rem;
  }
  .button_start2{
    display:flex;
    justify-content: center;
    margin-top: 20px;
    margin-right: 1rem;

  }
  .row_botton{
    display: flex;
    justify-content: center;

  }
  .f1 {
    font-size: 13px;
  }
  .paragrafo {
    text-align: right;
    margin-top: 50px;
  }
  @media only screen and (max-width: 830px) {
    .container {
      flex-direction: column;
      margin: 0px;
      padding: 0px;
      text-align: center;

      .foto2 {
        display: flex;
        width: auto;

      }
      ::after,
      ::before {
        box-sizing: none;
      }
      .form-control {
        width: auto;
      }
      .order2 {
        border: 0px solid #2d2d2d;
      }
      .row_botton {
   align-items: center;
   justify-content: center;
  }
    }
  }
`;
