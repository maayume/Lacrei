import "../../styles/global.css";
import "./styles.ts"
import { Container } from "./styles";
import backIcon from "../../assets/icons/back.png"
import { Link } from "react-router-dom";


export default function Decisao(){
    return (
        <Container>
            <div id="body">
                <a><img src={backIcon}/></a>
                <div id="content">
                    <div id="title">
                        <p>Faça parte </p>
                        <p>da Lacrei Saúde!</p>
                    </div>
                    <div id="content-text">
                        <div>
                        <p>Por enquanto, estamos recrutando somente profissionais que <strong>atuem em São Paulo</strong> e sejam formades em:</p>
                        <p><strong>Enfermagem, Fisioterapia, Fonoaudiologia, Medicina, Nutrição, Odontologia ou Psicologia</strong></p>
                        </div>
                        <p>Você se encaixa nesse perfil? Cadastre-se! Precisamos de você.</p>
                        <button>Fazer cadastro</button>
                        <p>Não atua em São Paulo? Não se preocupe, entre em nossa lista de espera e te avisaremos quando chegarmos ao seu estado.</p>
                        <Link to="/listaespera">
                        <button id="lista-espera">Lista de espera</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}