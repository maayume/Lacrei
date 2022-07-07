import { Routes as WrapperRoute, Route, BrowserRouter } from "react-router-dom";

import  Home  from "./pages/Home";
import  Login  from "./pages/Login";
import  PreCadastro  from "./pages/PreCadastro";
import Step1 from "./pages/Step1";
import PosCadastro from "./pages/PosCadastro";
import  Perfil  from "./pages/Perfil";
import ListaEspera from "./pages/ListaEspera";
import ConfPreCadastro from "./pages/ConfirmacaoPreCadastro";

export default function Routes(){
    return(
        <BrowserRouter>
            <WrapperRoute>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/precadastro" element={ <PreCadastro /> } />
                <Route path="/step1" element={ <Step1 /> } />
                <Route path="/poscadastro" element={ <PosCadastro /> } />
                <Route path="/perfil" element={ <Perfil /> } />
                <Route path="/listaespera" element={ <ListaEspera /> } />
                <Route path="/confirmacaocadastro" element={ <ConfPreCadastro /> } />
            </WrapperRoute>
        </BrowserRouter>
    );
}