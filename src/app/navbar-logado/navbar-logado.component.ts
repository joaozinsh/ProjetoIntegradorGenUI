import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar-logado',
  templateUrl: './navbar-logado.component.html',
  styleUrls: ['./navbar-logado.component.css']
})
export class NavbarLogadoComponent implements OnInit {
  apelido = environment.apelido
  
  constructor(
    public  auth: AuthService
  ) { }

  ngOnInit(){
    
  }

}
