import { FormCadastro } from "./styles";
import foto1 from "../../../assets/logo/group7.png";
import { Button } from "../../../components/Button/styles";
import { Link } from "react-router-dom";

export default function PageCad4() {
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
          <p className="subtitulo">Dados Sobre o local de atendimento</p>
          <h6>*campos de preenchimento obrigatório</h6>

          <div className="container row align-itens-center p-5">
            <form className="col-4" id="exampleCheck4 ">
              <div className="colcard1">
                <div className="row">
                  <div className="col">
                    <p>Celular</p>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="colcard1">
                <div className="row">
                  <div className="col">
                    <p>Whatsapp</p>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="colcard1">
                <div className="row">
                  <div className="col">
                    <p>Tel Fixo </p>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>
              <h6>Endereço do consultório*</h6>
              <label className="form-label"></label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Escreva o endereço do local (ou locais) de atendimento."
              ></textarea>
              <br />
            </form>
            <div className="col-4" id="exampleCheck2">
              <div className="col order2">
                <h6>Acessibilidade do local*</h6>
              </div>
              <div className="form-check f1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label">
                  O estabelecimento cumpre integralmente a NBR 9050
                </label>
              </div>
              <div className="form-check f1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label">
                  O estabelecimento cumpre parcialmente a NBR 9050
                </label>
              </div>
              <div className="form-check f1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label">
                  O estabelecimento não cumpre a NBR 9050
                </label>
                <br />
                <p></p>
                <h6>Clique aqui para saber mais sobre a NBR 9050.</h6>
      
             
                <h6>Tipo de atendimento</h6>
                <p></p>
                <div className="form-check row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label">Tele-consulta</label>
                </div>
                <div className="form-check row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label className="form-check-label">Presencial</label>
                </div>
                <div className="form-check row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label className="form-check-label">Clínica</label>
                </div>
              </div>
            </div>

            <br />
            <form className="col-4" id="exampleCheck2">
              <div className="col order2">
                <h6>Observações</h6>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Descreva os itens de acessibilidade presentes no espaço (rampas, banheiros PCD, barras de apoio para PMR, piso tátil, profissionais capacitados em libras, etc.)"
                  ></textarea>
                </div>
              </div>
              <div className="col order2">
                <h6>Convênios aceitos*</h6>
                <div className="mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Convênios</option>
                    <option value="1">AGF</option>
                    <option value="2">IPALE RJ</option>
                    <option value="3">AMAFRE RJ</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="row_botton">
            <div className="button_start2">
            <Link to="/Step3">
              <Button type="button" className="btn2 btn-ligth">
              Voltar
              </Button>
              </Link>
            </div>
            <div className="button_end2">
            <Link to="/pageCad5">
                  <Button  type="submit">
                    Avançar
                  </Button>
                </Link>
            </div>
            </div>
    
          </div>
        </main>
      </div>
    </FormCadastro>
  );
}
