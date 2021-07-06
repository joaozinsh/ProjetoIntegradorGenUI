import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  apelido = environment.apelido
  constructor(
    public  auth: AuthService
  ) { }
  
  ngOnInit(){
    console.log(this.apelido) 
  }

}
