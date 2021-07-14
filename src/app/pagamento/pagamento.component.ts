import { Router } from '@angular/router';
import { CarrinhoService } from './../service/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {



  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if (environment.token == '') {
      alert('Faltando Token!');
      this.router.navigate(['/home']);
    }
  }
}
