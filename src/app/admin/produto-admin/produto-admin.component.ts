import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doenca } from 'src/app/model/Doenca';
import { Medicamento } from 'src/app/model/Medicamento';
import { AlertasService } from 'src/app/service/alertas.service';
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
    private router: Router,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    this.missingToken();
    this.findAllDoencas();
    this.findAllMedicamentos();
  }

  missingToken() {
    if (environment.token == '') {
      this.alertas.showAlertInfo('Necessário acesso de Administrador!')
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

  findByIdMedicamento(id: number) {
    this.produtoService.getByIdMedicamento(id).subscribe((resp: Medicamento)=> {
      this.medicamento = resp
    })
  }

  findAllDoencas() {
    this.doencaService.getAllDoenca().subscribe((resp: Doenca[]) => {
      this.listaDoenca = resp;
    });
    this.findAllMedicamentos();
  }

  cadastrarProd() {
    if(this.medicamento.promocao === null){this.medicamento.promocao = false}
    if(this.medicamento.destaque === null){this.medicamento.destaque = false}
    if(this.medicamento.receita === null){this.medicamento.receita = false}
    this.produtoService
      .postMedicamentos(this.medicamento)
      .subscribe((resp: Medicamento) => {
        this.medicamento = resp;
        this.alertas.showAlertSuccess('Medicamento inserido com sucesso!');
        this.medicamento = new Medicamento();
        this.findAllMedicamentos();
      });
  }

  atualizarMedicamento(medicamento: Medicamento) {
    this.produtoService.putMedicamento(medicamento).subscribe((resp: Medicamento)=> {
      this.medicamento = new Medicamento()
      this.alertas.showAlertSuccess("Medicamento atualizado com sucesso!")
      this.findAllMedicamentos()
    })
  }

  apagarMedicamento(id: number) {
    this.produtoService.deleteMedicamento(id).subscribe(()=> {
      this.alertas.showAlertSuccess("Medicamento apagado com sucesso!")
      this.findAllMedicamentos()
    })
  }

}
