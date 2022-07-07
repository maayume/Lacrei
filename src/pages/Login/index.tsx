import React from 'react';

import  Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Ellipse2 from "../../assets/imagens_amir/ellipse2.png";
import Mocapc from "../../assets/imagens_amir/mocapc.png";

import "./styles.css"

export default function Login(){
    return(
        <>
        
        <Container>
            <Row>
                <Col className='col1'> 

                    <h1 className='cabecario1'> Criar Conta </h1>

                    <Form className="formulario1">
                        <Form.Group className="mb-3" controlId="formBasicNome">
                            <Form.Label className="textocabeca">Nome completo</Form.Label>
                            <Form.Control className="caixa" type="text" placeholder="Digite seu nome" /><br/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textocabeca">Email</Form.Label>
                            <Form.Control className="caixa" type="email" placeholder="Digite seu email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSenha">
                            <Form.Label className="textocabeca">Senha</Form.Label>
                            <Form.Control className="caixa" type="password" placeholder="Digite sua senha" />
                        </Form.Group>
                        <Button className="btn-esquerdo" href='./PreCadastro' variant="link">Criar</Button>
                         

                      
                    </Form>
                        <p className="paragrafo3">Quero ser um profissional!</p>
                </Col>
                <Col>
                        <img className="ellipse2" src={Ellipse2}/>
                        <img className="mocapc"src={Mocapc}/>
                        <h2 className="cabecario2"> Já possui conta? </h2>
                        <p className="paragrafo2">Entre com seu Lacrei ID e aproveite os nossos profissionais da saúde.</p>
                        
                        <Button className="btn-direito" href='#' variant="link">Entrar</Button>


                </Col>
            </Row>
        </Container>
    </>
    );
}