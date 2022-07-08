import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/styles";
import { Area, Container } from "./styles";

export default function PageCad2() {
  return (
    <Container>
      <div className="body">
        <div id="container">
          <h1>Cadastro de Profissional</h1>
          <h3>Dados Profissionais</h3>
          <h5>*Campos de preenchimento obrigatório</h5>
          <form action="" id="form-step1" method="post">
            <label htmlFor="area-atuacao">
              <p className="legenda" id="legenda-atuacao">
                Área de atuação*
              </p>
              <select
                className="campo"
                name="atuacao"
                id="atuacao"
                form="form-step1"
                placeholder="Selecione a área de atuação"
              >
                <option value="Selecione a area de atuação">
                  Selecione a área de atuação
                </option>
                <option value="Enfermagem">Enfermagem</option>
                <option value="Fisioterapia">Fisioterapia</option>
                <option value="Fonoaudiologia">Fonoaudiologia</option>
                <option value="Medicina">Medicina</option>
                <option value="Nutrição">Nutrição</option>
                <option value="Odontologia">Odontologia</option>
                <option value="Psicologia">Psicologia</option>
              </select>
            </label>
            <label htmlFor="conselhoProfissional">
              <p className="legenda" id="legenda-conselho">
                Prefixo do conselho profissional*
              </p>
              <select
                className="campo"
                name="conselhoProfissional"
                id="conselhoProfissional"
                form="form-step1"
                placeholder="conselho profissional"
              >
                <option value="Prefixo de conselho profissional">
                  Prefixo de conselho profissional
                </option>
                <option value="COREN">COREN</option>
                <option value="COFFITO">COFFITO</option>
                <option value="CREFONO ">CREFONO</option>
                <option value="CRM">CRM</option>
                <option value="CRN">CRN</option>
                <option value="CRO">CRO</option>
                <option value="CRP">CRP</option>
              </select>
            </label>
            <label htmlFor="conselhoProfissional">
              <p className="legenda" id="legenda-registro">
                Número de registro profissional*
              </p>
              <input
                className="campo"
                type="text"
                name="registroProfissional"
                id="registroProfissional"
                placeholder="00/000000"
              />
            </label>
          </form>
          <h5>Carta aberta*</h5>
          <h6>
            Descreva porquê deseja atuar no atendimento a comunidade LGBTQIAPN+.
            Quais suas motivações? De que forma você se <br></br>identifica com
            a causa?
          </h6>
        </div>
        <div className="row_botton">
          <div className="button_start2">
            <Link to="/cadastro">
              <Button type="button" className="btn2 btn-ligth">
                Voltar
              </Button>
            </Link>
          </div>
          <div className="button_end2">
            <Link to="/Step3">
              <Button type="submit">Avançar</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
