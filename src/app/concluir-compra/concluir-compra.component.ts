import { Router } from '@angular/router';
import { CarrinhoService } from './../service/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NavbarLogadoComponent } from '../navbar-logado/navbar-logado.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-concluir-compra',
  templateUrl: './concluir-compra.component.html',
  styleUrls: ['./concluir-compra.component.css']
})
export class ConcluirCompraComponent implements OnInit {

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router,
    private navbar: NavbarComponent,
    private navbarLogado: NavbarLogadoComponent
  ) { }

  ngOnInit(): void {
    this.carrinhoService.clear()
    this.navbar.cartCounter()
    this.navbarLogado.cartCounter()
    
    if (environment.token == '') {
      alert('Faltando Token!');
      this.router.navigate(['/home']);
    }
  }

}
