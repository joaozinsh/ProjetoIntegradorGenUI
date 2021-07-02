import { Doenca } from "./Doenca"

export class Medicamento {
    public categoria: string
    public descricao: string
    public doencas: Doenca[]
    public id: number
    public nome: string
    public preco: string
}