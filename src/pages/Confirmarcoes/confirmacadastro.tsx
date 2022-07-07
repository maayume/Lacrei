import { FormPre } from "../PreCadastro/styles";
import Logo4 from "../../assets/logo/image4.png"

export default function ConfirmaPre() {
  return (
    <FormPre>
    <body>
      <main className="container row align-itens-center  p-5">
        <h3>Pré-cadastro confirmado</h3>
        <p>Agora vamos verificar o número de inscrição fornecido em seu conselho profissional. 
Em até 24 horas te enviaremos um e-mail com um link para finalização do cadastro. </p>
      <p>Obrigade por apoiar essa causa.</p>
      <img className="logo_4" src={Logo4} alt="logo"/>

        </main>
        </body>
        </FormPre>
  )
}