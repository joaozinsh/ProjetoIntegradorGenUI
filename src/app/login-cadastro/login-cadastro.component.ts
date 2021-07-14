import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  user: Usuario = new Usuario
  userLogin: UserLogin = new UserLogin

  confirmarSenha: string = ''
  isChecked: boolean

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  cadastrar() {
    this.user.tipo = "Cliente"

    if (this.user.senha == this.confirmarSenha) {
      if (this.isChecked == true) {
        this.auth.cadastrar(this.user).subscribe((resp: Usuario) => {
          this.user = resp

          this.user = new Usuario()
        })
      } else {
        alert("Por favor, marque a opção de permissão de uso dos dados.")
      }
    } else {
      alert("As senhas devem ser iguais!")
    }
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp


      console.log(this.userLogin.apelido)

      environment.token = this.userLogin.token
      environment.apelido = this.userLogin.apelido
      environment.tipo = this.userLogin.tipo

      console.log(environment.apelido)
      this.router.navigate(['/home'])
    }, erro => {
      if (this.userLogin.email == "") {
        alert("Faltou o email")
      } else if (this.userLogin.senha == "") {
        alert("Faltou a senha")
      }
    })
  }
}
