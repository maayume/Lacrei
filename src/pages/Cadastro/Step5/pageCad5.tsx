import { FormCadastro } from "./styles";
import { Button } from "../../../components/Button/styles";
import { Link } from "react-router-dom";

export default function PageCad5() {
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
          <p className="subtitulo">Dados Sobre o loca de atendimento</p>
          <h6>*campos de preenchimento obrigatório</h6>

          <div className="container row align-itens-center p-5">
          <div className=" row col-3">
              <h6>Segunda-feira</h6>
              <h6>Terça-feira</h6>
              <h6>Quarta-feira</h6>
              <h6>Quinta-feira</h6>
              <h6>Sexta-feira</h6>
              <h6>Sábado</h6>
              <h6>Domingo</h6>
  
            </div>
            <form className="col-3" id="exampleCheck5 ">
        
              <div className="form-check">
                
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Manhã
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Manhã
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Manhã
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Manhã
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Manhã
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Manhã
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Manhã
  </label>
</div>
            </form>
            <form className="col-3" id="exampleCheck5 ">
            <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Tarde
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Tarde
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Tarde
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Tarde
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Tarde
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Tarde
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Tarde
  </label>
</div>

</form>
<form className="col-3" id="exampleCheck5 ">
            <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Noite
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Noite
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Noite
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Noite
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Noite
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Noite
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
    Noite
  </label>
</div>

</form>

          </div>

          <br />

          <div className="row_botton">
            <div className="button_start2">
              <Link to="/pageCad4">
                <Button type="button" className="btn2 btn-ligth">
                  Voltar
                </Button>
              </Link>
            </div>
            <div className="button_end2">
              <Link to="/Step6">
                <Button type="submit">Avançar</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </FormCadastro>
  );
}
