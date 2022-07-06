import { ReactNode } from "react";
import  Theme  from "../../components/Theme";
import * as C from "./styles";

export default function Step1(){
    return(
         <Theme>
            <C.Container>
                <p>Passo 1</p>
                <h3>Dados Profissionais</h3>
            </C.Container>
         </Theme>
    );
}