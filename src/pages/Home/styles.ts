import styled from "styled-components";
import bgmini from "../../assets/background/bg-img-mini.png";
import bgmini2 from "../../assets/background/bg-img-mini2.png";

export const Container = styled.div`

  .body {
    font-family: "Nunito", sans-serif;
    padding: 5%;
    background-image: url(${bgmini}), url(${bgmini2});
    background-position: left bottom, right bottom ;
    background-repeat: no-repeat;
  }


  h3 {
    padding: 0 0 50px 0;
    color: #018762;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0em;
  }
  h6{
    padding: 3rem;
  }

  p {
    color: #018762;
    font-size: 20px;
  }
  .imgcel {
    display: flex;
    justify-content: end;
  }


  .form-default {
    width: 100%;
    padding: 0px;
    margin: -8px;
  }

  .row_botton {
    display:flex;
    justify-content: start;
  }
  .button_end {
    color: green;
    background-color: white;
  }

  .button_start2{
    padding: 0 10px;
  }
  .btncarta {
    background: white;
    color: #018762;
    border: 1px solid #018762; 
  }
`;