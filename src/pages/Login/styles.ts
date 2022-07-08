import styled from "styled-components";
import homeoffice from "../../assets/homeoffice.png";
import bgecli from "../../assets/background/bg-img-ecl.png";

export const Container = styled.div`

  .body {
    font-family: "Nunito", sans-serif;
    padding: 1%;
    background-image: url(${homeoffice}), url(${bgecli});
    background-position: right bottom, right ;
    background-repeat: no-repeat;
    background-size: auto;
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


  .form-label{
    display: flex;
    flex-direction: row;

  }
  .form-default {
    width: 100%;
    padding: 0px;
    margin: -8px;
  }

  
  .button_end {
    display:flex;
    justify-content: start;
    margin: 40px 0 0 100px;

  }
  @media only screen and (max-width: 900px) {
    main {
        display: flex;
        flex-direction: column;
        div{
          width: 60%;
        }
        .button_end{
          margin: 0 0 0 1;
        }
            label, h6, h3{
          color: white;
        }
    }
   
  }
  @media only screen and (max-width: 520px) {
    main {
        display: flex;
        flex-direction: column;
        div{
          width: 80%;
        }
        .button_end{
          margin: 0 0 0 1;
        }
        label, h6, h3{
          color: white;
        }
    }
   
  }
  @media only screen and (max-width: 400px) {
    main {
        display: flex;
        flex-direction: column;
        div{
          width: 100%;
        }
        .button_end{
          margin: 0;
        }
        label, h6, h3{
          color: white;
        }
    }
   
  }
`;