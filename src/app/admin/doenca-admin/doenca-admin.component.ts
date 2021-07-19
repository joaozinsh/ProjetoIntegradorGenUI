import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doenca } from 'src/app/model/Doenca';
import { Medicamento } from 'src/app/model/Medicamento';
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
    private router: Router
  ) { }

  ngOnInit() {
    this.missingToken();
    this.findAllDoencas();
  }

  missingToken() {
    if (environment.token == '') {
      alert('Necessário acesso de Administrador!')
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
      alert('Categoria Doença criada!');
      this.findAllDoencas()
    });
  }

  atualizarDoenca(doenca: Doenca) {
    this.doencaService.putDoenca(doenca).subscribe((resp: Doenca) => {
      this.doenca = new Doenca()
      alert('Categoria Doença atualizada!')
      this.findAllDoencas()
    })
  }

  apagarDoenca(id: number) {
    this.doencaService.deleteDoenca(id).subscribe(() => {
      alert("Categoria Doença apagada!")
      this.findAllDoencas()
    }, erro => {
      if (erro.status == 500) {
        alert('Não é Possivel Apagar uma Doença com Medicamentos Atribulos a Ela!')
      }
    })
  }
}