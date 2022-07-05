import { Routes as WapperRoute, Route, BrowserRouter } from "react-router-dom";

import  Home  from "./pages/Home";
import  Login  from "./pages/Login";
import  PreCadastro  from "./pages/PreCadastro";
import Cadastro from "./pages/Cadastro";
import PosCadastro from "./pages/PosCadastro";
import  Perfil  from "./pages/Perfil";

export default function Routes(){
    return(
        <BrowserRouter>
            <WapperRoute>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/precadastro" element={ <PreCadastro /> } />
                <Route path="/cadastro" element={ <Cadastro /> } />
                <Route path="/poscadastro" element={ <PosCadastro /> } />
                <Route path="/perfil" element={ <Perfil /> } />
            </WapperRoute>
        </BrowserRouter>
    );
}