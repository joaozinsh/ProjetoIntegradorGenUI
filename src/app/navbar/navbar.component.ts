import { AuthService } from './../service/auth.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class NavbarComponent implements OnInit {

  totalCarrinho: number

  constructor(
    public  auth: AuthService,
    public carrinho: CarrinhoService
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

}
