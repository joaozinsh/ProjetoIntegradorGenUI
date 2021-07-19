import { Injectable } from '@angular/core';
import { MedicamentoItem } from '../model/MedicamentoItem';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  medicamentos: MedicamentoItem[] = []
  public totalPro: number

  constructor() {
  }

  total(){
    this.totalPro = this.medicamentos.length
    return this.totalPro
  }

  add(medicamento: MedicamentoItem) {
    if (this.medicamentos.length == 0) {
      console.log("cadastrou o primeiro")
      this.medicamentos.push(medicamento)

    } else {
      console.log("ja tinha coisa la dentro, vou ver se ja existe esse produto")

      var existe = false
      var index = 0

      for (let i = 0; i < this.medicamentos.length; i++) {
        if (medicamento.nome === this.medicamentos[i].nome) {
          existe = true
          index = i
          break
        }
      }
      
      if (existe == true) {
        console.log("humm, ja existe esse produto la, vou add +1 no qtd")
        for(let i = 0; i < this.medicamentos.length; i++) {
          if(i == index) {
            this.medicamentos[i].qtd += medicamento.qtd
            this.medicamentos[i].precoTotal = this.medicamentos[i].precoUni * this.medicamentos[i].qtd
            break
          }
        }
      } else {
        console.log("nossa esse produto é novo, vou adicionar")
        this.medicamentos.push(medicamento)
      }
    }
  }

  remove(index: number) {
    this.medicamentos.splice(index, 1)
    return this.medicamentos
  }

  get() {
    return this.medicamentos
  }

  clear() {
    this.medicamentos = []
    return this.medicamentos
  }
}
