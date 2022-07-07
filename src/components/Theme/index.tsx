import { ReactNode } from "react";
import * as C from "./styles";
import { Header } from "../Header";

type Props = {
    children: ReactNode;
}
export default function Theme({children}: Props){
    return(
        <C.Container>
            <C.Area>
                <Header />
                Cadastro de Profissional
                <C.Steps>
                    <C.Sidebar>

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}