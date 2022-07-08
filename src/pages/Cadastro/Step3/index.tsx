import { FormCadastro } from "./styles";
import foto2 from "../../../assets/logo/como-mandar-foto.png";
import foto3 from "../../../assets/logo/carregar-foto.png";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/styles";

export default function PageCad3() {
  return (
    <FormCadastro>
      <div className="body">
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
          <p className="subtitulo">Verificação de Identidade</p>
          <h6>Para comprovar sua identidade precisamos de uam foto sua (onde apareça seu rosto) com a carteira profissionala o lado) </h6>

          <div className="container row align-itens-center p-5">
            <form className="col-4" id="exampleCheck1 ">
              <div className="col">
                <div className="container2 col-6">
                  <div className="col order2">
                    <img className="foto2" src={foto2} alt="foto" />
                  </div>
                </div>
              </div>

              <br />
            </form>
            <form className="col-8" id="exampleCheck2">
              <div className="foto3">
              <img className="foto33" src={foto3} alt="foto" />

              </div> 
              <div className="row_botton">
            <div className="button_start2">
              <Link to="/Step2">
                <Button type="button" className="btn2 btn-ligth">
                  Voltar
                </Button>
              </Link>
            </div>
            <div className="button_end2">
              <Link to="/pageCad4">
                <Button type="submit">Avançar</Button>
              </Link>
            </div>
          </div>

              
            </form>
            <br />
          </div>
        </main>
      </div>
    </FormCadastro>
  );
}
