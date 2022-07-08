import { Routes as WrapperRoute, Route, BrowserRouter } from "react-router-dom";

import  Home  from "./pages/Home";
import  Login  from "./pages/Login";
import  PreCadastro  from "./pages/PreCadastro";
import Cadastro from "./pages/Cadastro/Step1/index";
import PosCadastro from "./pages/PosCadastro";
import  Perfil  from "./pages/Perfil";
import ListaEspera from "./pages/ListaEspera";

import PageCad3 from "./pages/Cadastro/Step3";
import PageCad4 from "./pages/Cadastro/Step4/pageCad4";
import PageCad5 from "./pages/Cadastro/Step5/pageCad5";
import PageCad6 from "./pages/Cadastro/Step6";
import PageCad7 from "./pages/Cadastro/Step7";
import Decisao from "./pages/Login/Decisao";
import PageCad2 from "./pages/Cadastro/Step2";
import Final from "./pages/PosCadastro/Confirma";
import { ConfirmaPre } from "./pages/Confirmarcoes/confirmacadastro";

export default function Routes(){
    return(
        <BrowserRouter>
            <WrapperRoute>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/decisao" element={ <Decisao /> } />
                <Route path="/precadastro" element={ <PreCadastro /> } />
                <Route path="/confirmapre" element={ <ConfirmaPre/> } />
                <Route path="/cadastro" element={ <Cadastro /> } />
                <Route path="/Step2" element={ <PageCad2 /> } />
                <Route path="/Step3" element={ <PageCad3 /> } />
                <Route path="/pageCad4" element={ <PageCad4 /> } />
                <Route path="/pageCad5" element={ <PageCad5 /> } />
                <Route path="/Step6" element={ <PageCad6 /> } />
                <Route path="/Step7" element={ <PageCad7 /> } />
                <Route path="/poscadastro" element={ <PosCadastro /> } />
                <Route path="/perfil" element={ <Perfil /> } />
                <Route path="/listaespera" element={ <ListaEspera /> } />
                <Route path="/final" element={ <Final /> } />
                <Route path="/confirmapre" element={ <ConfirmaPre /> } />
            </WrapperRoute>
        </BrowserRouter>
    );
}