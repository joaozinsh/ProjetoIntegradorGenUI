import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private alertas: AlertasService
  ) { }

  ngOnInit(): void {
  }

  enviarMsg() {
    this.alertas.showAlertSuccess("Mensagem enviada com sucesso!")
  }
}
