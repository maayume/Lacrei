import { Link } from "react-router-dom";
import { Button } from "../../components/Button/styles";
import { Container } from "./styles"
import imgCel from "../../assets/bg-cel.png";


export default function Home(){
  return(

    <Container>
      <div className="body">
        <form>
          <h2>Lacrei Saúde</h2>
          <h4>Está precisando cuidar da saúde? Encontre os profissionais capacitades a ouvir o que você tem a dizer, com respeito e segurança!</h4>


          <main className="container col p-5">
          <div className="row_botton">
            <div className="button_start2">
              <Link to="/login">
                <Button type="button">
                  Entrar
                </Button>
              </Link>
            </div>
            <div className="button_end2">
              <Link to="/final">
                <Button type="submit" className="btncarta">Carta Aberta</Button>
              </Link>
            </div>
          </div>
          <div className="imgcel" >
            <img src={imgCel} alt="imagem celular" />
          </div>
          </main>
        </form>
      </div>
    </Container>
  );
}
