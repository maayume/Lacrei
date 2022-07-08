import { FormCadastro } from "./styles";
import { Button } from "../../../components/Button/styles";
import { Link } from "react-router-dom";

export default function PageCad6() {
  return (
    <FormCadastro>
      <div className="body4">
        <main className="container row align-itens-center p-5">
          <h3>Cadastro de profissional</h3>
          <br />

          <label className="form-label">
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
          </label>
          <p className="subtitulo">Dados sobre o serviço</p>
          <h6>*campos de preenchimento obrigatório</h6>

          <div className="container row align-itens-center p-5">
            <div className=" row col-3">
              <h6>Nome do Serviço*</h6>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Digite o nome do serviço"
                aria-label=".form-control-lg example"
              />
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Digite o nome do serviço"
                aria-label=".form-control-lg example"
              />
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Digite o nome do serviço"
                aria-label=".form-control-lg example"
              />
            </div>
            <form className="col-3" id="exampleCheck5 ">
              <div className="form-check">
                <h6>Duração em minutos*</h6>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Duração"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Duração"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Duração"
                  aria-label=".form-control-lg example"
                />
              </div>
            </form>
            <form className="col-3" id="exampleCheck5 ">
              <div className="form-check">
                <h6>Tipo de atendimento*</h6>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Modalidade"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Modalidade"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Modalidade"
                  aria-label=".form-control-lg example"
                />
              </div>
            </form>
            <form className="col-2" id="exampleCheck5 ">
              <div className="form-check">
                <h6>Valor do serviço*</h6>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="R$ 0000,00"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="R$ 0000,00"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="R$ 0000,00"
                  aria-label=".form-control-lg example"
                />
              </div>
            </form>
          </div>

          <br />

          <div className="row_botton">
            <div className="button_start2">
              <Link to="/pageCad5">
                <Button type="button" className="btn2 btn-ligth">
                  Voltar
                </Button>
              </Link>
            </div>
            <div className="button_end2">
              <Link to="/final">
                <Button type="submit">Avançar</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </FormCadastro>
  );
}
