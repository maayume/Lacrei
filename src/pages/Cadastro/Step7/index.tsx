import { FormCadastro } from "./styles";
import { Button } from "../../../components/Button/styles";
import { Link } from "react-router-dom";

export default function PageCad7() {
  return (
    <FormCadastro>
      <div className="body4">
        <main className="container row align-itens-center p-5">
          <h3>Cadastro concluído!</h3>
          <br />

          <label className="form-label">
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
            <input type="range" min="0" max="1" className="form-default" />
          </label>
<p></p>
<div className="paragrafo">
            <h6>Parabéns, todos os dados obrigatórios de seu cadastro já foram salvos em nossa plataforma. Vamos analisá-los e em 24 horas você receberá um email com login e senha provisórios para acesso ao seu perfil</h6>
          <h5>Deseja completar seu perfil com mais informações?</h5>

</div>


          <div className="container row align-itens-center p-5">


    
            <form className="col-3" id="exampleCheck5 ">
           
            </form>
            <form className="col-2" id="exampleCheck5 ">
             
            </form>
          </div>

          <br />

          <div className="row_botton">
            <div className="button_start2">
              <Link to="/final">
                <Button type="button" className="btn2 btn-ligth">
                  Completar depois
                </Button>
              </Link>
            </div>
            <div className="button_end2">
              <Link to="/Step7">
                <Button type="submit">Completar agora</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </FormCadastro>
  );
}
