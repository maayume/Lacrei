import "./styles";
import { Container } from "./styles";
import backIcon from "../../../assets/back.png";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/styles";

export default function Decisao() {
  return (
    <Container>
      <div id="body">
      
        <div id="content">
          <div id="title">
            <p>Faça parte </p>
            <p>da Lacrei Saúde!</p>
          </div>
          <div id="content-text">
            <div>
              <p>
                Por enquanto, estamos recrutando somente profissionais que{""}
                <strong>atuem em São Paulo</strong> e sejam formades em:
              </p>
              <p>
                <strong>
                  Enfermagem, Fisioterapia, Fonoaudiologia, Medicina, Nutrição,
                  Odontologia ou Psicologia
                </strong>
              </p>
            </div>
            <p>
              Você se encaixa nesse perfil? Cadastre-se! Precisamos de você.
            </p>
            <div className="button_start2">
              <Link to="/precadastro">
                <Button type="button" className="btn2 btn-ligth">
                  Fazer cadastro
                </Button>
              </Link>
              </div>
              <p>
                Não atua em São Paulo? Não se preocupe, entre em nossa lista de
                espera e te avisaremos quando chegarmos ao seu estado.
              </p>

            <div className="button_end2">
              <Link to="/listaespera">
                <Button type="button" className="btnespera">Lista de espera</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
