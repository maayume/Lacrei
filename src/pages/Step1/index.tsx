import { ReactNode } from "react";
// import  Theme  from "../../components/Theme";
import * as C from "./styles";

export default function Step1(){
    return(
        //  <Theme>
            <C.Container>
                <h3>Dados Profissionais</h3>
                <h5>*Campos de preenchimento obrigatório</h5>
                <form action="" id="form-step1" method="post">
                    <label htmlFor="area-atuacao">
                    <p>Área de atuação*</p>
                    <select name="atuacao" id="atuacao" form="form-step1" placeholder="Selecione a área de atuação">
                        <option value="Selecione a area de atuação">Selecione a área de atuação</option>
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
                    <p>Prefixo do conselho profissional*</p>
                    <select name="conselhoProfissional" id="conselhoProfissional" form="form-step1" placeholder="conselho profissional">
                        <option value="Prefixo de conselho profissional">Prefixo de conselho profissional</option>
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
                    <p>Email</p>
                    <input type="email" name="email" id="email" className="input-field" placeholder="Digite seu email"/>
                    </label>
                    <button id="voltar" >Voltar</button>
                    <button id="Avancar" >Avançar</button>
        </form>
            </C.Container>
        //  </Theme>
    );
}