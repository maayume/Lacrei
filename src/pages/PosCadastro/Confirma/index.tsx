import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/styles";
import { Container } from "./styles";


export default function Final(){
    return (
    <Container>
        <body>
            <div className="confirmacao-cadastro">
                <h1>Parabéns, o seu perfil está completo!</h1>
                <h4> Vamos analisá-lo e em 24 horas você receberá um email com login<br></br> e senha provisórios para acesso ao seu perfil. </h4>
                <div className="button_end">


<Link to="/login">
  <Button id="submit-button" type="submit">
    Voltar para a página inicial
  </Button>
</Link>
</div>

            </div>
        </body>
    </Container>
    );
  }