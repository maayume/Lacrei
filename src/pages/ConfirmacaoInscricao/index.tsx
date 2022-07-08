import { StyleConfirmacaoInscricao } from "./styles";

export default function ConfirmacaoInscricao(){
    return (
      <StyleConfirmacaoInscricao>
        <body>
          <div className="confirmacao-inscricao">
            <h1>Você já está inscrito na lista de espera!</h1>
            <h4>Assim que chegarmos ao seu estado te enviaremos um <br></br>email para conclusão do cadastro no time de <br></br>
            profissionais da Lacrei Saúde.</h4>
            <button id="voltar" className="botao" >Voltar na página inicial</button>
          </div>
        </body>
      </StyleConfirmacaoInscricao>
    );
  }