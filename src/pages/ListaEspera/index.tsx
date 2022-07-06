import { FormLista } from "./styles";


export default function ListaEspera(){
    return (
      <FormLista>
        <body>
          

      <div className="lista-espera">
        <h1>Lista de espera para profissionais</h1>
        <h4>Não atua em São Paulo? deixe seu contato conosco.</h4>
        <h4>Te avisaremos por email assim que chegarmos ao seu estado.</h4>

        <form action="" id="form-lista-espera" method="post">
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
                <option value="AL">AL</option>
                <option value="AM">AM</option>
                <option value="AP">AP</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MG">MG</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="RS">RS</option>
                <option value="SC">SC</option>
                <option value="SE">SE</option>
                <option value="SP">SP</option>
                <option value="TO">TO</option>
            </select>
            </div>
            <button id="submit-button" type="submit">Enviar</button>
        </form>
      </div>
      </body>
      </FormLista>
    );
  }