import styled from "styled-components";
import bgimg1 from "../../assets/background/bg-img-1.png";
import bgimg2 from "../../assets/background/bg-img-2.png";



export const Container = styled.div`
  div {
    margin-right: 6rem;
  }

  body {
    font-family: "Nunito", sans-serif;
    padding: 0px;
    background-image: url(${bgimg1}), url(${bgimg2});
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: auto;
  }
  form {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .div {
    flex-wrap: wrap;
  }
  h3 {
    padding: 0 0 50px 10px;
    color: #018762;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0em;
  }

  .form-label {
    margin: 1rem 0 1rem 0;
    font-weight: bold;
  }
  #exampleCheck2 {
    padding-left: 2rem;
  }
  #exampleCheck1 {
    padding-right: 2rem;
  }
  button {
    background-color: #cfcfcf;
    background-color: #018762;
    font-weight: bold;
    padding: 10px 32px;
    box-shadow: 0px 1px 3px 0px #0000001a;
  }
  .logo_4{
    height: 92px;
    width:92px;
  }
  @media only screen and (max-width: 768px) {
    main,
    form {
      width: 50vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0px;
      padding: 0px;

      label {
        width: 40vh;
      }
      h3 {
        padding: 0px;
        line-height: 40px;
      }
    }
  }

  #exampleCheck1,
  #exampleCheck2 {
    padding: 0px;
  }
  @media only screen and (max-width: 365px) {
    main,
    form {
      width: 30vh;
      flex-direction: column;
      align-items: flex-start;
      margin: 0px;
      padding: 0px;

      label {
        width: 30vh;
      }
    }
  }
  @media only screen and (max-width: 290px) {
    main {
      display: flex;
      width: 20vh;
    }
    h3 {
      font-size: 30px;
    }
  }
`;
