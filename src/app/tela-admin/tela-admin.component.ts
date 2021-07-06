import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Doenca } from '../model/Doenca';
import { Medicamento } from '../model/Medicamento';
import { DoencaService } from '../service/doenca.service';
import { MedicamentoService } from '../service/medicamento.service';

@Component({
  selector: 'app-tela-admin',
  templateUrl: './tela-admin.component.html',
  styleUrls: ['./tela-admin.component.css'],
})
export class TelaAdminComponent implements OnInit {
  medicamento: Medicamento = new Medicamento();
  listaMedicamento: Medicamento[];
  listaDoenca: Doenca[];
  doenca: Doenca = new Doenca();
  medPost: Medicamento;

  constructor(
    private medicamentoService: MedicamentoService,
    private doencaService: DoencaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.missingToken();
    console.log(environment.token);
    this.findAllDoencas();
    this.findAllMedicamentos();
  }

  missingToken() {
    if (environment.token == '') {
      alert('Faltando Token!');
      this.router.navigate(['/home'])
    }
  }

  findAllMedicamentos() {
    this.medicamentoService
      .getAllMedicamentos()
      .subscribe((resp: Medicamento[]) => {
        this.listaMedicamento = resp;
      });
  }

  findAllDoencas() {
    this.doencaService.getAllDoenca().subscribe((resp: Doenca[]) => {
      this.listaDoenca = resp;
    })
  }

  /*findDoencaByID(id:number){
    this.doencaService.getDoencaById(id).subscribe((resp: Doenca) => {
      this.doenca = resp;
      )
    }
  }*/


  cadastrar() {
    console.log(environment.token)
    this.doencaService
      .postDoenca(this.doenca)
      .subscribe((resp: Doenca) => {
        this.doenca = resp;
        alert('Doenca criada!');
      });
    console.log(this.doenca)
  }
}
