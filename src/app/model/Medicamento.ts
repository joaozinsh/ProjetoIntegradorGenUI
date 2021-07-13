import { Doenca } from "./Doenca"

export class Medicamento {
    public tipo: string
    public descricao: string
    public doencas: Doenca[]
    public id: number
    public nome: string
    public preco: number
    public foto: string
    public promocao: boolean
    public destaque: boolean
    public receita: boolean
}