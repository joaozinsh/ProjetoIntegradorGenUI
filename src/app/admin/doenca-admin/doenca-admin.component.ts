import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doenca } from 'src/app/model/Doenca';
import { Medicamento } from 'src/app/model/Medicamento';
import { DoencaService } from 'src/app/service/doenca.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-doenca-admin',
  templateUrl: './doenca-admin.component.html',
  styleUrls: ['./doenca-admin.component.css']
})
export class DoencaAdminComponent implements OnInit {

  medicamento: Medicamento = new Medicamento();
  listaMedicamento: Medicamento[];
  listaDoenca: Doenca[];
  doenca: Doenca = new Doenca();
  medPost: Medicamento;

  constructor(
    private produtoService: ProdutosService,
    private doencaService: DoencaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.missingToken();
    console.log(environment.token);
    this.findAllDoencas();
  }

  missingToken() {
    if (environment.token == '') {
      alert('Faltando Token!');
      this.router.navigate(['/home'])
    }
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
}
