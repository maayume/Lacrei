
import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from  "react-bootstrap/Col";
import Vetor1 from "../../assets/imagens_amir/vector1.png";
import Vetor2 from "../../assets/imagens_amir/vector2.png";
import Cels from "../../assets/imagens_amir/cels3.png";
import "../../styles/global.css";
import "./styles.css"

export default function Home(){
  return(
    <div className="Home">
          
      <Container>

        <Row>
            <Col className="vetor1"lg={2}><img src={Vetor1} /></Col>

            <Col xs={6} md={4}>
              <h1> Lacrei Saúde</h1>
              <p>Está precisando cuidar da saúde? Encontre os profissionais capacitades a
                 ouvir o que você tem a dizer, com respeito e segurança!</p>
              
            </Col>

            <Col className="juncao" xs={1}>
                <img className="vetor2" src={Vetor2}/>
                <img className="cels"src={Cels}/>
            </Col>
        </Row>
        
      </Container>
    </div>
  );
}
