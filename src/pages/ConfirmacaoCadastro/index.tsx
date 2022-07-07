import { StyleCadastro } from "./styles";


export default function Cadastro(){
    return (
    <StyleCadastro>
        <body>
            <div className="confirmacao-cadastro">
                <h1>Parabéns, o seu perfil está completo!</h1>
                <h4> Vamos analisá-lo e em 24 horas você receberá um email com login<br></br> e senha provisórios para acesso ao seu perfil. </h4>
                <h5>Voltar para página inicial</h5>
            </div>
        </body>
    </StyleCadastro>
    );
  }