import { Link } from "react-router-dom";
import { Button } from "../../components/Button/styles";
import { FormPre } from "./styles";

export default function PreCadastro() {
  return (
    <FormPre>
      <body>
        <main className="container row align-itens-center p-5">
          <h3>Pré-cadastro de profissional</h3>
          <form className="col-6" id="exampleCheck1 ">
            <div className="col">
              <label className="form-label">
                Estado de atuação profissional
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Selecione seu estado</option>
                <option value="1">São Paulo</option>
                <option value="2">Outros estados</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label">Nome completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="col">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Digite seu email"
              />
            </div>
            <div className="col">
              <label className="form-label">
                Prefixo do conselho profissional
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Selecione o seu conselho profissional</option>
                <option value="1">COREN - Enfermagem</option>
                <option value="2">CREFITO - Fisioterapia</option>
                <option value="3">CRFa - Fonoaudiologia</option>
                <option value="4">CRM - Medicina</option>
                <option value="5">CRN - Nutrição</option>
                <option value="6">CRO - Odontologia</option>
                <option value="7">CRP - Psicologia</option>
              </select>
            </div>
            <br />
          </form>
          <form className="col-6" id="exampleCheck2">
            <div className="col">
              <label className="form-label ">
                Número de registro profissional
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: 00/00000"
              />
            </div>
            <div className="col">
              <label className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                placeholder="Digite sua senha"
              />
            </div>
            <div className="col">
              <label className="form-label">Confirmar senha</label>
              <input
                type="password"
                className="form-control"
                placeholder="Digite sua senha"
              />
            </div>
          </form>
          <br />
          <form className="order">
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">
                Concordo com os Termos de Uso e Política de Privacidade.
              </label>
            </div>
            <div className="button_end">
              <Link to="/confirmapre">
                <Button id="submit-button" type="submit">
                  Enviar
                </Button>
              </Link>
            </div>
          </form>
        </main>
      </body>
    </FormPre>
  );
}
