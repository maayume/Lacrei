import { ReactNode } from "react";
import "./styles";
import  Theme  from "../../components/Theme";
import * as C from "./styles";

type Props = {
    children: ReactNode;
}

export default function Step1({children} : Props){
    return(
         <Theme>
            <C.Container>
                oi
            </C.Container>
         </Theme>
    );
}