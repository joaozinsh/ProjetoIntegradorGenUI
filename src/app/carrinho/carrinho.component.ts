import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentoItem } from '../model/MedicamentoItem';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent implements OnInit {

  medicamentos = this.carrinhoService.get()

  totalMedicamento: number

  subtotal: number
  total: number

  qtd: number

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.totalMedicamento = this.carrinhoService.total()
    this.vazio()
    this.subtotal = 0
    this.subTotal()
    this.total = this.subtotal
  }

  vazio(){
    if(this.totalMedicamento == 0) {
      this.router.navigate(['/carrinho-vazio'])
    }
  }

  inc(nome: string, qtd: number){
    for(let i = 0; i < this.medicamentos.length; i++) {
      if(this.medicamentos[i].nome === nome) {
        this.medicamentos[i].qtd = qtd + 1
        this.medicamentos[i].precoTotal = this.medicamentos[i].precoUni * this.medicamentos[i].qtd

        this.subtotal += this.medicamentos[i].precoUni
        this.total = this.subtotal
      }
    }
  }

  dec(nome: string, qtd: number){
    for(let i = 0; i < this.medicamentos.length; i++) {
      if(this.medicamentos[i].nome === nome) {
        if(this.medicamentos[i].qtd >= 2) {
          this.medicamentos[i].qtd = qtd - 1
          this.medicamentos[i].precoTotal = this.medicamentos[i].precoUni * this.medicamentos[i].qtd

          this.subtotal -= this.medicamentos[i].precoUni
          this.total = this.subtotal
        }   
      }
    }
  }

  subTotal() {
    for(let i = 0; i < this.medicamentos.length; i++) {
      this.subtotal += this.medicamentos[i].precoTotal
    }
  }

  delete(nome: string) {
    for(let i = 0; i < this.medicamentos.length; i++) {
      if(this.medicamentos[i].nome === nome) {
        this.subtotal -= this.medicamentos[i].precoTotal
        this.total = this.subtotal
        this.totalMedicamento -= 1

        this.carrinhoService.remove(i)
        this.vazio()
      }
    }
  }

  clear() {
    this.medicamentos = this.carrinhoService.clear()
    this.subtotal = 0
    this.total = this.subtotal
    this.totalMedicamento = 0
    this.vazio()
  }
}
