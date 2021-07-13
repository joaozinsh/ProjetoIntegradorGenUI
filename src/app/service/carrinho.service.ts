import { Injectable } from '@angular/core';
import { MedicamentoItem } from '../model/MedicamentoItem';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  medicamentos: any[]

  constructor() {
    this.medicamentos = []
  }

  add(medicamento: MedicamentoItem) {
    this.medicamentos.push(medicamento)
  }

  get(){
    return this.medicamentos
  }

  clear(){
    this.medicamentos = []
  }
}
