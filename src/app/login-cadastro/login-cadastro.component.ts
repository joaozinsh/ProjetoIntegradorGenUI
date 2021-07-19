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

  confirmarSenha: string = ""
  validSenha: string
  isChecked: boolean

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    window.scroll(0, 0)
  }

  cadastrar() {
    this.user.tipo = "Cliente"

    if(this.confirmarSenha == ""){
      this.validSenha = "Por favor, confirme sua senha."
    } else {
      if (this.user.senha == this.confirmarSenha) {
        if (this.isChecked == true) {
          this.auth.cadastrar(this.user).subscribe((resp: Usuario) => {
            this.user = resp
  
            this.user = new Usuario()
            this.confirmarSenha = ""
            this.isChecked = false
            this.router.navigate(['/login-cadastro'])
          })
        } else {
          alert("teste")
        }
  
      } else {
        this.confirmarSenha = ""
        this.validSenha = "A senha deve ser iguais"
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
      if (this.userLogin.email == "") {
        alert("Faltou o email")
      } else if (this.userLogin.senha == "") {
        alert("Faltou a senha")
      }
    })
  }
}

(function () {
  'use strict';
  window.addEventListener('load', function () {
      // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
      var forms = document.getElementsByClassName('needs-validation');
      // Faz um loop neles e evita o envio
      var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event: any) {
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
              }
              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();