import styled from "styled-components";
import bgimg7 from "../../../assets/background/bg-img-7.png"

export const Container = styled.div`
.body{
    font-family: "Nunito", sans-serif;
    padding: 5%;
    background-image: url(${bgimg7});
    background-position: right bottom;
    background-repeat: no-repeat;
    width: 100%;
    margin: 0;
}

h1{
    color: #018762;
    font-size: 40px;
    padding-bottom: 40px;
}
h3{
    color: #018762;
    font-size: 24px;
    width: 700;
    line-height: 36px;
}
h5{
    font-size: 16px;
    text-align: left;
    font-weight: bold;
}
form{
    display: flex;
    font-size: 16px;
    font-weight: bold;
}
.campo{
    border: 1px solid #515151;
    border-radius: 8px;
    padding: 12px;
    width: 100%;
}
label{
    padding-right: 91px;
    padding-top: 54px;
    padding-bottom: 59px;
}
.legenda{
    width:300px;
    height:13px;
    padding-bottom: 9px;
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
    border: 2px solid #018762;
    border-radius: 5px;
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
    box-shadow: 0px 1px 3px 0px #0000001a;

  }
  .row_botton{
    display: flex;
    justify-content: center;

  }
@media only screen and (max-width: 768px) {
    .campo {
        width: 90%;
    }
    #legenda {
        width: 95%;
    }
    h1,h3,h5 {
        display: flex;
        flex-direction: column;
    }
    .botao {
        width: 90%;
        margin: 80px auto 0;
    }
    .Container{
        display: flex;
        flex-direction: column;
    }
}
`
export const Area = styled.div`
    display: box;
    margin: auto;
    max-width: 980px;
    min-height:100vh;
    flex-direction: column;
`