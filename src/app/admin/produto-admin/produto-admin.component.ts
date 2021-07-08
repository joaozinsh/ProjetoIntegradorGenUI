import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doenca } from 'src/app/model/Doenca';
import { Medicamento } from 'src/app/model/Medicamento';
import { DoencaService } from 'src/app/service/doenca.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-admin',
  templateUrl: './produto-admin.component.html',
  styleUrls: ['./produto-admin.component.css'],
})
export class ProdutoAdminComponent implements OnInit {
  medicamento: Medicamento = new Medicamento();
  listaMedicamento: Medicamento[];
  listaDoenca: Doenca[];
  doenca: Doenca = new Doenca();
  medPost: Medicamento;

  constructor(
    private produtoService: ProdutosService,
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
      this.router.navigate(['/home']);
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
    this.findAllDoencas();
    this.findAllMedicamentos();
  }
}
