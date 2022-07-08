import { FormCadastro } from "./styles";
import foto1 from "../../../assets/logo/group7.png";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/styles";

export default function Cadastro() {
  return (
    <FormCadastro>
      <div className="body">
        <main className="container row align-itens-center p-5">
          <h3>Cadastro de profissional</h3>
          <br />

          <label className="form-label">
            <input type="range" min="0" max="1"  value="disabledRange" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
          </label>
          <p className="subtitulo">Dados Pessoais</p>
          <h6>*campos de preenchimento obrigatório</h6>

          <div className="container row align-itens-center p-5">
            <form className="col-4" id="exampleCheck1 ">
              <div className="col">
                <div className="container2 col-6">
                  <div className="col order2">
                    <h6 className="inputNome">Angélica da Silva Gomes</h6>
                    <img className="foto1" src={foto1} alt="foto" />
                  </div>
                </div>
              </div>

              <br />
            </form>
            <form className="col-8" id="exampleCheck2">
              <div className="col order2">
                <h6>Descrição da foto</h6>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Descreva sua foto contando quais são suas características, relatando como você está na foto (vestimentas e ação), qual é o contexto e como é o fundo."
                  ></textarea>
                </div>
              </div>
              <div className="col order2">
                <h6>Descrição da foto</h6>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Descreva sua foto contando quais são suas características, relatando como você está na foto (vestimentas e ação), qual é o contexto e como é o fundo."
                  ></textarea>
                </div>
              </div>
              <div className="button_end">


                <Link to="/Step2">
                  <Button id="submit-button" type="submit">
                    Avançar
                  </Button>
                </Link>
              </div>

              
            </form>
            <br />
          </div>
        </main>
      </div>
    </FormCadastro>
  );
}
