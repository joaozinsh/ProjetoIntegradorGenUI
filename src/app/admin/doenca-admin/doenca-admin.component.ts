import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doenca } from 'src/app/model/Doenca';
import { Medicamento } from 'src/app/model/Medicamento';
import { AlertasService } from 'src/app/service/alertas.service';
import { DoencaService } from 'src/app/service/doenca.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-doenca-admin',
  templateUrl: './doenca-admin.component.html',
  styleUrls: ['./doenca-admin.component.css']
})
export class DoencaAdminComponent implements OnInit {

  medicamento: Medicamento = new Medicamento();
  listaMedicamento: Medicamento[];
  medPost: Medicamento;

  listaDoenca: Doenca[];
  idDoenca: number
  doenca: Doenca = new Doenca();


  constructor(
    private doencaService: DoencaService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    this.missingToken();
    this.findAllDoencas();
  }

  missingToken() {
    if (environment.token == '') {
      this.alertas.showAlertInfo('Necessário acesso de Administrador!')
      this.router.navigate(['/home'])
    }
  }

  findAllDoencas() {
    this.doencaService.getAllDoenca().subscribe((resp: Doenca[]) => {
      this.listaDoenca = resp;
    });
  }

  findByIdDoenca(id: number) {
    this.doencaService.getByIdDoenca(id).subscribe((resp: Doenca) => {
      this.doenca = resp
    })
  }

  cadastrarDoenca() {
    this.doencaService.postDoenca(this.doenca).subscribe((resp: Doenca) => {
      this.doenca = new Doenca()
      this.alertas.showAlertSuccess('Categoria doença inserida com sucesso!');
      this.findAllDoencas()
    });
  }

  atualizarDoenca(doenca: Doenca) {
    this.doencaService.putDoenca(doenca).subscribe((resp: Doenca) => {
      this.doenca = new Doenca()
      this.alertas.showAlertSuccess('Categoria doença atualizada com sucesso!')
      this.findAllDoencas()
    })
  }

  apagarDoenca(id: number) {
    this.doencaService.deleteDoenca(id).subscribe(() => {
      this.alertas.showAlertSuccess("Categoria doença apagada com sucesso!")
      this.findAllDoencas()
    }, erro => {
      if (erro.status == 500) {
        this.alertas.showAlertDanger('Não é possivel apagar uma doença com medicamentos atribulos a ela!')
      }
    })
  }
}