import { Link } from "react-router-dom";
import { Button } from "../../components/Button/styles";
import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <div className="body">
        <form>

          <main className="container col align-itens-center p-5">
          <div className="titulo"><h3>Criar conta</h3></div>

            <div className="mb-3 col-4">
              <label className="form-label">Nome Completo</label>
              <input type="text" className="form-control" placeholder="Digite seu nome"/>
            </div>
            <div className="mb-3 col-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Digite seu email"
              />
              <div id="emailHelp"></div>
            </div>
            <div className="mb-3 col-4">
              <label className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                placeholder="Digite sua senha"
              />
            </div>

            <div className="button_end">
              <Link to="/decisao">
                <Button id="submit-button" type="submit">
                  Criar
                </Button>
              </Link>
            </div>
            <h6>Quero ser ume profissional!</h6>
          </main>
        </form>
      </div>
    </Container>
  );
}
