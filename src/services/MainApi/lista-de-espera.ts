import baseApi from "../MainApi/config"

interface CadastroListaEsperaPayload {
   nome: string,
   email: string,
   atuacao: string,
   estado: string
}

export function cadastroListaEspera(payload: CadastroListaEsperaPayload) {
    return baseApi.post("/endpoint", payload)
}

