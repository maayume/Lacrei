
import * as S from "./styles" 
import ReactDOM  from 'react-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from  "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import Vetor1 from "../../assets/background/bg-img-1.png";
import Vetor2 from "../../assets/background/bg-img-2.png";




export default function Login(){
  return(
    <S.Container>


    <div className="Home">
          
      <Container>

        <Row>
            <Col className="vetor1"lg={2}><img src={Vetor1} /></Col>

            <Col className="texto" xs={6} md={4}>
              <h1> Lacrei Saúde</h1>
              <p><br/>Está precisando cuidar da saúde? Encontre os profissionais capacitades a
                 ouvir o que você tem a dizer, com respeito e segurança!<br/><br/></p>
              <div className="buttons">
                 <Button className="btn-esquerdo1" href='./PreCadastro' variant="link">Criar</Button>
                 <Button className="btn-direito1" href='#' variant="link">Carta Aberta</Button>
               </div>

            </Col>

            <Col className="juncao" xs={1}>
                <img className="vetor2" src={Vetor2}/>
                <img className="cels"/>
                <h2>Saiba mais </h2>
               
            </Col>
        </Row>
        
        </Container>
    </div>
       </S.Container>
  );
}