import { Router } from '@angular/router';
import { CarrinhoService } from './../service/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NavbarLogadoComponent } from '../navbar-logado/navbar-logado.component';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor(
    private navbarLogado: NavbarLogadoComponent
  ) { }

  ngOnInit(){
  }
}
