import * as C from "./styles";

export default function Step1(){
    return(
        <C.Container className="container">
            <h1>Cadastro de Profissional</h1>
            <h3>Dados Profissionais</h3>
            <h5>*Campos de preenchimento obrigatório</h5>
            <form action="" id="form-step1" method="post">
                <label htmlFor="area-atuacao">
                <p className="legenda" id="legenda-atuacao">Área de atuação*</p>
                <select className="campo" name="atuacao" id="atuacao" form="form-step1" placeholder="Selecione a área de atuação">
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
                <p className="legenda" id="legenda-conselho">Prefixo do conselho profissional*</p>
                <select className="campo" name="conselhoProfissional" id="conselhoProfissional" form="form-step1" placeholder="conselho profissional">
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
                <p className="legenda" id="legenda-registro">Número de registro profissional*</p>
                <input className="campo" type="text" name="registroProfissional" id="registroProfissional" placeholder="00/000000"/>
                </label>
            </form>
            <h5>Carta aberta*</h5>
            <h6>Descreva porquê deseja atuar no atendimento a comunidade LGBTQIAPN+. Quais suas motivações? De que forma você se <br></br>identifica com a causa?</h6>
            <C.Area>
                <button id="voltar" className="botao">Voltar</button>
                <button id="Avancar" className="botao">Avançar</button>
            </C.Area>
        </C.Container>
    );
}