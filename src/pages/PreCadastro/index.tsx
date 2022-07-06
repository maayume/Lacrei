import { FormPre } from "./styles";

export default function PreCadastro(){
    return (
        <FormPre>
          <main className="container row align-itens-center  p-5">
            <h3>Pré-cadastro de profissional</h3>
    
            <form className="col-6" id="exampleCheck1">
              <div className="col">
                <label className="form-label">Estado de atuação profissional</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Selecione seu estado</option>
                  <option value="1">São Paulo</option>
                  <option value="2">Outro</option>
                </select>
              </div>
              <div className="col">
                <label className="form-label">Nome completo</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="col">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Digite seu email"
                />
              </div>
              <div className="col">
                <label className="form-label">
                  Prefixo do conselho profissional
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Selecione o seu conselho profissional"
                />
              </div>
              <br />
    
              <form>
    
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label" >Concordo com os Termos de Uso e Política de Privacidade.</label>
      </div>
      <button type="submit" className="btn btn-secondary">Entrar</button>
    </form>
            </form>
            <form className="col-6" id="exampleCheck2">
              <div className="col">
                <label className="form-label">
                  Número de registro profissional
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: 00/00000"
                />
              </div>
              <div className="col">
                <label className="form-label">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                />
              </div>
              <div className="col">
                <label className="form-label">Confirmar senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                />
              </div>
            </form>
            <br />
          </main>
        </FormPre>
      );
}