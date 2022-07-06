import "../../styles/global.css";
import "./styles.css"

export default function Cadastro(){
    return (
      <div className="cadastro">
        <h1>Cadastro de Profissional</h1>
        <h4>Dados pessoais</h4>

        <form action="" id="form-cadastro" method="post">
            <label htmlFor="nome-completo">
            <p>Nome completo</p>
            <input type="text" name="nome-completo" id="nome-completo" className="input-field" placeholder="Digite seu nome" />
            </label>
            <label htmlFor="email">
            <p>Email</p>
            <input type="email" name="email" id="email" className="input-field" placeholder="Digite seu email"/>
            </label>
            <div id="form-radio">
                <p>Área de atuação</p>
                
                <label htmlFor="enfermagem">
                <input type="radio" name="area-de-atuacao" id="enfermagem" value="enfermagem"/>    
                <span>Enfermagem</span>
                </label>

                <label htmlFor="fisioterapia">
                <input type="radio" name="area-de-atuacao" id="fisioterapia" value="fisioterapia"/>
                <span>Fisioterapia</span>
                </label>

                <label htmlFor="fonoaudiologia">
                <input type="radio" name="area-de-atuacao" id="fonoaudiologia" value="fonoaudiologia"/>
                <span>Fonoaudiologia</span>
                </label>

                <label htmlFor="medicina">
                <input type="radio" name="area-de-atuacao" id="medicina" value="medicina"/>
                <span>Medicina</span>               
                </label>

                <label htmlFor="nutricao">
                <input type="radio" name="area-de-atuacao" id="nutricao" value="nutricao"/>
                <span>Nutrição</span>  
                </label>

                <label htmlFor="odontologia">
                <input type="radio" name="area-de-atuacao" id="odontologia" value="odontologia"/>    
                <span>Odontologia</span>              
                </label>

                <label htmlFor="psicologia">
                <input type="radio" name="area-de-atuacao" id="psicologia" value="psicologia"/>
                <span>Psicologia</span>  
                </label>
            </div>
            <div className="input-estado">
            <p>Estado de atuação profissional</p>
            <select name="estado" id="estado" form="form-lista-espera" placeholder="Selecione o seu estado">
                <option value="AC">Selecione seu estado</option>
                <option value="AC">AC</option>
            </select>
            </div>
            <button id="submit-button" type="submit">Enviar</button>
        </form>
      </div>
    );
  }