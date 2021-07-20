import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-navbar-logado',
  templateUrl: './navbar-logado.component.html',
  styleUrls: ['./navbar-logado.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class NavbarLogadoComponent implements OnInit {
  
  apelido = environment.apelido
  totalCarrinho: number
  
  constructor(
    public  auth: AuthService,
    public carrinho: CarrinhoService,
    public router: Router
  ) {
    this.carrinho.cartSubject.subscribe((data)=> {
      this.totalCarrinho = data
    })
  }

  ngOnInit(){
    this.cartCounter()
  }

  cartCounter(){
    this.totalCarrinho = this.carrinho.total()
    this.carrinho.cartSubject.next(this.totalCarrinho)
  }

  deslogar() {
    environment.token = ""
    this.router.navigate(['/home'])
  }
}
