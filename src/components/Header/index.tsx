import { ReactNode } from "react";
import "./styles.ts";

type Props = {
    children: ReactNode;
}

export default function Header({children} : Props){
    return(
        <C.Container>
            <C.Area>
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