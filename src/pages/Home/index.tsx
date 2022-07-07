
import React from 'react';
import ReactDOM  from 'react-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from  "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import  Login  from "./pages/Login";
import TrendingFlatSharpIcon from '@mui/icons-material/TrendingFlatSharp';
import Vetor1 from "../../assets/imagens_amir/vector1.png";
import Vetor2 from "../../assets/imagens_amir/vector2.png";
import Cels from "../../assets/imagens_amir/cels3.png";
import "../../styles/global.css";
import "./styles.css"

// class MeuComponente extends React.Component{
//     pglogin(){<Link to="./Login"/>

//     }

// }

export default function Home(){
  return(
    <div className="Home">
          
      <Container>

        <Row>
            <Col className="vetor1"lg={2}><img src={Vetor1} /></Col>

            <Col className="texto" xs={6} md={4}>
              <h1> Lacrei Saúde</h1>
              <p><br/>Está precisando cuidar da saúde? Encontre os profissionais capacitades a
                 ouvir o que você tem a dizer, com respeito e segurança!<br/><br/></p>
              <div className="buttons">
                 <Button className="btn-esquerdo1" href='#' variant="link">Criar</Button>
                 <Button className="button2" variant="outline-secondary"> Carta Aberta</Button>{' '}
              </div>

            </Col>

            <Col className="juncao" xs={1}>
                <img className="vetor2" src={Vetor2}/>
                <img className="cels"src={Cels}/>
                <h2>Saiba mais <TrendingFlatSharpIcon/> </h2>
               
            </Col>
        </Row>
        
      </Container>
    </div>
  );
}
