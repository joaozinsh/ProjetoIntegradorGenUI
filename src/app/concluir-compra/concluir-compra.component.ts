import { Router } from '@angular/router';
import { CarrinhoService } from './../service/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-concluir-compra',
  templateUrl: './concluir-compra.component.html',
  styleUrls: ['./concluir-compra.component.css']
})
export class ConcluirCompraComponent implements OnInit {

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carrinhoService.clear()
    if (environment.token == '') {
      alert('Faltando Token!');
      this.router.navigate(['/home']);
    }
  }

}
