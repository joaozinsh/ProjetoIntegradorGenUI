import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://api-saudedobem.herokuapp.com/usuarios/login', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://api-saudedobem.herokuapp.com/usuarios/cadastrar', user)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }

  loginCadastro() {
    let currentUrl = this.router.url

    if(currentUrl === "/login-cadastro"){
      return true
    }

    return false
  }

  admin() {
    let adm: boolean = false
    if (environment.tipo == "Administrador") {
      adm = true
    }
    return adm
  }
}


