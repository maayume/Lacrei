import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { FormLista } from "./styles";
import { cadastroListaEspera } from "../../services/MainApi/lista-de-espera"



export default function ListaEspera(){

  // estados dos inputs

    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [atuacao, setAtuacao] = useState<string>("")
    const [estado, setEstado] = useState<string>("")

    function handleListChange(event: ChangeEvent<HTMLSelectElement>) {
      setEstado(event.target.value)
    }

  // observa a mudança de valor do input radio  
    function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
      setAtuacao(event.target.value)
    }

  // variavel que armazena opções da lista suspensa
  
  const options = [
    {value: "AC"},
    {value: "AL"},
    {value: "AM"},
    {value: "AP"},
    {value: "BA"},
    {value: "CE"},
    {value: "DF"},
    {value: "ES"},
    {value: "GO"},
    {value: "MA"},
    {value: "MG"},
    {value: "MS"},
    {value: "MT"},    
    {value: "PA"},
    {value: "PB"},
    {value: "PE"},
    {value: "PI"},
    {value: "PR"},
    {value: "RJ"},
    {value: "RN"},
    {value: "RS"},
    {value: "RO"},
    {value: "RR"},
    {value: "SC"},
    {value: "SP"},
    {value: "SE"},
    {value: "TO"}
  ]

    // payload é o objeto que enviar dados pra API

    async function cadastro(event: FormEvent) {
      event.preventDefault();

      const payload = {
        nome,
        email,
        atuacao,
        estado,
      }
      
      cadastroListaEspera(payload)
      
    }


    return (

      <FormLista>
        <div id="body">
          

      <div className="lista-espera">
        <h1>Lista de espera para profissionais</h1>
        <h4>Não atua em São Paulo? deixe seu contato conosco.</h4>
        <h4>Te avisaremos por email assim que chegarmos ao seu estado.</h4>

        <form action="" id="form-lista-espera" method="post">
            <label htmlFor="nome-completo">
            <p>Nome completo</p>
            <input type="text" name="nome-completo" id="nome-completo" className="input-field" placeholder="Digite seu nome" onChange={((event) => setNome(event.target.value))} value={nome}/>
            </label>
            <label htmlFor="email">
            <p>Email</p>
            <input type="email" name="email" id="email" className="input-field" placeholder="Digite seu email" onChange={((event) => setEmail(event.target.value))} value={email} />
            </label>
            <div id="form-radio">
                <p>Área de atuação</p>
                
                <label htmlFor="enfermagem">
                <input type="radio" name="area-de-atuacao" id="enfermagem" value="enfermagem" checked={atuacao === "enfermagem"} onChange={handleRadioChange}/>    
                <span>Enfermagem</span>
                </label>

                <label htmlFor="fisioterapia">
                <input type="radio" name="area-de-atuacao" id="fisioterapia" value="fisioterapia" checked={atuacao === "fisioterapia"} onChange={handleRadioChange}/>
                <span>Fisioterapia</span>
                </label>

                <label htmlFor="fonoaudiologia">
                <input type="radio" name="area-de-atuacao" id="fonoaudiologia" value="fonoaudiologia" checked={atuacao === "fonoaudiologia"} onChange={handleRadioChange}/>
                <span>Fonoaudiologia</span>
                </label>

                <label htmlFor="medicina">
                <input type="radio" name="area-de-atuacao" id="medicina" value="medicina" checked={atuacao === "medicina"} onChange={handleRadioChange}/>
                <span>Medicina</span>               
                </label>

                <label htmlFor="nutricao">
                <input type="radio" name="area-de-atuacao" id="nutricao" value="nutricao" checked={atuacao === "nutricao"} onChange={handleRadioChange}/>
                <span>Nutrição</span>  
                </label>

                <label htmlFor="odontologia">
                <input type="radio" name="area-de-atuacao" id="odontologia" value="odontologia" checked={atuacao === "odontologia"} onChange={handleRadioChange}/>    
                <span>Odontologia</span>              
                </label>

                <label htmlFor="psicologia">
                <input type="radio" name="area-de-atuacao" id="psicologia" value="psicologia" checked={atuacao === "psicologia"} onChange={handleRadioChange}/>
                <span>Psicologia</span>  
                </label>
            </div>
            <div className="input-estado">
            <p>Estado de atuação profissional</p>
            <select name="estado" id="estado" form="form-lista-espera" placeholder="Selecione o seu estado" onChange={handleListChange}>
                <option disabled defaultValue="">Selecione seu estado</option>
               {options.map((option, index) => (
                <option key={index} defaultValue={option.value}>{option.value}</option>
               ))}
            </select>
            </div>
            <button id="submit-button" type="submit" onClick={cadastro}>Entrar</button>
        </form>
      </div>
      </div>

      
      </FormLista>

      
      
    );
  }