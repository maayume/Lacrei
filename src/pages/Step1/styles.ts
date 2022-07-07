import styled from "styled-components";
import bgimg7 from "../../assets/background/bg-img-7.png"

export const Container = styled.div`
body{
    font-family: sans-serif;
    padding: 5%;
    background-image: url(${bgimg7});
    background-position: right;
    background-repeat: no-repeat;
    background-size: auto;
    min-height: 100vh;
    font-size: 16px;
} 
    padding: 94px 102px 40px;
h1{
    color: #018762;
    font-size: 40px;
    padding-bottom: 40px;
}
h3{
    color: #018762;
    font-size: 24px;
    Weight: 700;
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
button{
    padding: 10.5px 32px;
    width: 120px;
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
    text-align: center;
}
#voltar{
    background-color: #FFF;
    color:#018762;
    box-shadow: 0 1px 3px 0 black;
    border-width: 2px;
    border-color: #018762;
}
#avancar{
    border: none;
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
    padding: 153px 140px;
    margin: auto;
    max-width: 980px;
    min-height:100vh;
    flex-direction: column;
`
