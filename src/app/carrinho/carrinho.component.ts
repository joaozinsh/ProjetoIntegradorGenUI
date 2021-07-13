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

  medicamentos: MedicamentoItem[]

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.medicamentos = this.carrinhoService.get()
  }

  clear() {
    this.carrinhoService.clear()
    this.medicamentos = this.carrinhoService.get()
  }

}
