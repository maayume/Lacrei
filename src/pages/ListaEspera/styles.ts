import styled from "styled-components"
import bgimg1 from "../../assets/background/bg-img-1.png"
import bgimg2 from "../../assets/background/bg-img-2.png"


export const FormLista = styled.div`
body{
    font-family: "Nunito", sans-serif;
    padding: 5%;
    background-image: url(${bgimg1}), url(${bgimg2});
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: auto;
} 

.lista-espera h1 {
    font-weight: 600;
    font-size: 40px;
    color: #018762;
    
}

.lista-espera h4 {
    font-weight: 400;
    font-size: 24px;
    color: #2D2D2D;
    margin: 0 auto;
   
}

#form-lista-espera {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
}

#form-lista-espera p{
    font-weight: 700;
    font-size: 18px;
    color: #1F1F1F;

}

.input-field {
    border: 1px solid #515151;
    border-radius: 8px;
    padding: 12px;
    width: 40%;
}

.input-estado {
    margin-top: 20px;
}

#estado {
    border: 1px solid #515151;
    border-radius: 8px;
    padding: 12px;
    width: 42%;
}

select {
    color: #636c72;
}

#form-radio span {
    margin-right: 25px;
}

#submit-button {
    padding: 10px 32px;
    width: 120px;
    height: 48px;
    margin-top: 80px;
    margin-left: 15%;
    background-color: #018762;
    color:#fff;
    font-weight: 700;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 black;

}

@media only screen and (max-width: 768px) {
    .input-field {
        width: 90%;
    }

    #estado {
        width: 95%;
    }

    #form-radio {
        display: flex;
        flex-direction: column;
    }

    #submit-button {
        width: 90%;
        margin: 80px auto 0;
    
    }
}
`;
