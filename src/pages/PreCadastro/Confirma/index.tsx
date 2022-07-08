
import { Container } from "./styles";

export default function ConfirmaPre (){
    return (
      <Container>
      <div className="confirmacao-pre-cadastro">
        <h1>Pré-Cadastro Confirmado!</h1>
        <h4>Agora vamos verificar o número de inscrição fornecido em seu conselho profissional.<br></br>
        Em até 24 horas te enviaremos um e-mail com um link para finalização do cadastro. </h4>
        <h5>Obrigade por apoiar essa causa.</h5>
        <button id="voltar" className="botao" >Voltar na página anterior</button>
      </div>
      </Container>
    );
  }
  