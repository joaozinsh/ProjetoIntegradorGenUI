import { Medicamento } from "./Medicamento"


export class Doenca {
    public descricao: string
    public id: number
    public medicamentos: Medicamento[]
    public nome: string
    public transmissivel: string
}

