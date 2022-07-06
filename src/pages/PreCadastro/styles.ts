import styled from "styled-components";

export const FormPre = styled.main`

    justify-content: center;
    align-items: center;
    margin-right: 6rem;

    form {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .div{
      flex-wrap: wrap;
    }
    h3{
      padding: 0 0 50px 10px;
      color: #018762;
    }
    .form-label {
      margin:  1rem 0 1rem 0;
      font-weight: bold;
    }
    #exampleCheck2{
      padding-left: 2rem;
    }
    #exampleCheck1{
      padding-right: 2rem;
    }
    button {
      background-color: #CFCFCF;
      background-color: #018762;
      font-weight: bold;
      padding: 10px 32px;
      box-shadow: 0px 1px 3px 0px #0000001A;
    }
    @media only screen and (max-width: 768px) {
    main, form {
        width: 50vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0px;
        padding: 0px;   
       
        label{
          width: 40vh;
       }  
       h3 {
        padding: 0px;
       }
      }
    }

    #exampleCheck1, #exampleCheck2{
      padding: 0px;
    }
    @media only screen and (max-width: 365px) {
    main, form {
        width: 30vh;
        flex-direction: column;
        align-items: flex-start;
        margin: 0px;
        padding: 0px;   
       
        label{
          width: 30vh;
       }  
      }
    }
       @media only screen and (max-width: 290px) {
    main {
      display: flex;
      width: 20vh;
    
    }
  }

`;
