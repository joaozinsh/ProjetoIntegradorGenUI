import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Doenca } from '../model/Doenca';
import { Medicamento } from '../model/Medicamento';
import { DoencaService } from '../service/doenca.service';
import { ProdutosService } from '../service/produtos.service';

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
    private produtoService: ProdutosService,
    private doencaService: DoencaService
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
    }
  }

  findAllMedicamentos() {
    this.produtoService
      .getAllMedicamentos()
      .subscribe((resp: Medicamento[]) => {
        this.listaMedicamento = resp;
      });
  }

  findAllDoencas() {
    this.doencaService.getAllDoenca().subscribe((resp: Doenca[]) => {
      this.listaDoenca = resp;
    });
  }

  cadastrarDoenca() {
    console.log(environment.token);
    this.doencaService.postDoenca(this.doenca).subscribe((resp: Doenca) => {
      this.doenca = resp;
      alert('Doenca criada!');
    });
    console.log(this.doenca);
  }

  cadastrarProd() {
    console.log(this.listaDoenca);
    console.log(environment.token);
    console.log(this.medicamento);
    this.produtoService
      .postMedicamentos(this.medicamento)
      .subscribe((resp: Medicamento) => {
        this.medicamento = resp;
        alert('Medicamento criado!');
      });
    console.log(this.medicamento);
  }
}
