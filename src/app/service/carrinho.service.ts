import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MedicamentoItem } from '../model/MedicamentoItem';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  medicamentos: MedicamentoItem[] = []
  public totalPro: number

  constructor() {
  }

  cartSubject = new Subject<any>()

  total() {
    return this.medicamentos.length
  }

  add(medicamento: MedicamentoItem) {
    if (this.medicamentos.length == 0) {
      this.medicamentos.push(medicamento)

    } else {
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
        for(let i = 0; i < this.medicamentos.length; i++) {
          if(i == index) {
            this.medicamentos[i].qtd += medicamento.qtd
            this.medicamentos[i].precoTotal = this.medicamentos[i].precoUni * this.medicamentos[i].qtd
            break
          }
        }
      } else {
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
