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
    console.log(this.medicamento.promocao);
    console.log(this.medicamento.destaque);
    console.log(this.medicamento.receita);
  }

  missingToken() {
    if (environment.token == '') {
      alert('Faltando Token!');
      this.router.navigate(['/home']);
    }
  }

  checkedPromo(evento: any) {
    if (evento.target.checked) {
      this.medicamento.promocao = true;
    } else {
      this.medicamento.promocao = false;
    }
  }

  checkedDestaque(evento: any) {
    if (evento.target.checked) {
      this.medicamento.destaque = true;
    } else {
      this.medicamento.destaque = false;
    }
  }

  checkedReceita(evento: any) {
    if (evento.target.checked) {
      this.medicamento.receita = true;
    } else {
      this.medicamento.receita = false;
    }
  }

  findAllMedicamentos() {
    this.produtoService
      .getAllMedicamentos()
      .subscribe((resp: Medicamento[]) => {
        this.listaMedicamento = resp;
      });
      this.medicamento.promocao = false
      this.medicamento.destaque = false
      this.medicamento.receita = false
  }

  findAllDoencas() {
    this.doencaService.getAllDoenca().subscribe((resp: Doenca[]) => {
      this.listaDoenca = resp;
    });
    this.findAllMedicamentos();
  }

  cadastrarProd() {
    console.log(this.listaDoenca);
    console.log(environment.token);
    console.log(this.medicamento);
    if(this.medicamento.promocao === null){this.medicamento.promocao = false}
    if(this.medicamento.destaque === null){this.medicamento.destaque = false}
    if(this.medicamento.receita === null){this.medicamento.receita = false}
    this.produtoService
      .postMedicamentos(this.medicamento)
      .subscribe((resp: Medicamento) => {
        this.medicamento = resp;
        alert('Medicamento criado!');
        this.medicamento = new Medicamento();
        this.findAllMedicamentos();
      });
    console.log(this.medicamento);
    this.medicamento = new Medicamento();
    this.findAllMedicamentos();
  }
}
