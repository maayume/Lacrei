import { Routes as WrapperRoute, Route, BrowserRouter } from "react-router-dom";

import  Home  from "./pages/Home";
import  Login  from "./pages/Login";
import  PreCadastro  from "./pages/PreCadastro";
import Cadastro from "./pages/Cadastro";
import PosCadastro from "./pages/PosCadastro";
import  Perfil  from "./pages/Perfil";
import ListaEspera from "./pages/ListaEspera";
import ConfirmaPre from "./pages/Confirmarcoes/confirmacadastro";

export default function Routes(){
    return(
        <BrowserRouter>
            <WrapperRoute>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/precadastro" element={ <PreCadastro /> } />
                <Route path="/confirmapre" element={ <ConfirmaPre/> } />
                <Route path="/cadastro" element={ <Cadastro /> } />
                <Route path="/poscadastro" element={ <PosCadastro /> } />
                <Route path="/perfil" element={ <Perfil /> } />
                <Route path="/listaespera" element={ <ListaEspera /> } />
            </WrapperRoute>
        </BrowserRouter>
    );
}