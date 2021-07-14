import { CarrinhoService } from './../service/carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concluir-compra',
  templateUrl: './concluir-compra.component.html',
  styleUrls: ['./concluir-compra.component.css']
})
export class ConcluirCompraComponent implements OnInit {

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.carrinhoService.clear()
  }

}
