import styled from "styled-components";

export const Container = styled.div`
h4,h5{
    font-size: 1em;
    width: 605px;
}
/* h1,h4,h5{
    text-align: right;
} */

.confirmacao-pre-cadastro h1 {
    font-weight: 600;
    font-size: 1.67em;
    color: var(--primary);
}

.confirmacao-pre-cadastro h4 {
    font-weight: 400;
    color: var(--secudary);
}
.confirmacao-pre-cadastro h5 {
    display: block;
    font-weight: 400;
    color: var(--primary);
    margin: 21.4 auto;
}

@media screen and (min-width: 620px) {
    body{
        font-size: 15px;
    }
}

@media screen and (min-width: 960px) {
    body{
        font-size: 18px;
    }
}

@media screen and (min-width: 1200px) {
        body{
            font-size: 24px;
        }
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

