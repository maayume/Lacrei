import React from 'react';

import  Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./styles.css"

export default function Login(){
    return(
        <>
        <Container>
            <Row>
                <Col> 

                    <h1> Criar Conta </h1>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicNome">
                            <Form.Label>Nome completo</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSenha">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                        </Form.Group>
  
                        <Button variant="primary" type="submit">
                            Criar
                        </Button>  

                        <P>Quero ser um profissional!</P>
                    </Form>

                </Col>
                <Col>
                        <H2> Já possui conta? </H2>
                        <p>Entre com seu Lacrei ID e aproveite os nossos profissionais da saúde.</p>
                        <button className="btn btn-primary" type="submit">Entrar</button>


                </Col>
            </Row>
        </Container>
    </>
    );
}