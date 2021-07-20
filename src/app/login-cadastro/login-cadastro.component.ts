import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  user: Usuario = new Usuario
  userLogin: UserLogin = new UserLogin

  confirmarSenha: string = ""
  isChecked: boolean

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) {
  }

  ngOnInit() {
    window.scroll(0, 0)
  }

  cadastrar() {
    this.user.tipo = "Cliente"

    if(this.confirmarSenha == ""){
    } else {
      if (this.user.senha == this.confirmarSenha) {
        if (this.isChecked == true) {
          this.auth.cadastrar(this.user).subscribe((resp: Usuario) => {
            this.user = resp
  
            this.user = new Usuario()
            this.confirmarSenha = ""
            this.isChecked = false
            this.alertas.showAlertSuccess("Cadastro realizado com sucesso! Faça login ao lado.")
          })
        } else {
          this.alertas.showAlertInfo("Por favor, aceite os termos de uso!")
        }
      } else {
        this.confirmarSenha = ""
        this.alertas.showAlertInfo("As senhas devem ser iguais!")
      }
    } 
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.apelido = this.userLogin.apelido
      environment.tipo = this.userLogin.tipo

      this.router.navigate(['/home'])
    }, erro => {
      if(erro.status == 401) {
        this.alertas.showAlertDanger("E-mail ou senha invalidos!")
      }

      if (this.userLogin.email == "") {
        this.alertas.showAlertInfo("Por favor, digite um e-mail")
      } else if (this.userLogin.senha == "") {
        this.alertas.showAlertInfo("Por favor, digite uma senha")
      }
    })
  }
}