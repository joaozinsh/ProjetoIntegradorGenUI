import { Doenca } from './../model/Doenca';
import { DoencaService } from './../service/doenca.service';
import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../model/Medicamento';
import { ProdutosService } from '../service/produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  medicamento: Medicamento = new Medicamento()
  listaMedicamentos: Medicamento[]

  doencas: Doenca = new Doenca()
  listaDoenca: Doenca[]

  constructor(
    private produtoService: ProdutosService,
    private doencaService: DoencaService
  ) { }

  ngOnInit(){
    this.findAllMedicamentos()
    this.findAllDoenca()
  }

  findAllMedicamentos() {
    this.produtoService.getAllMedicamentos().subscribe((resp: Medicamento[])=> {
      this.listaMedicamentos = resp
    })
  }

  findAllDoenca(){
    this.doencaService.getAllDoenca().subscribe((resp: Doenca[])=>{
      this.listaDoenca = resp
    })
  }

  findByTipo(tipo: string){
    console.log("oi")
    this.produtoService.getTipoMedicamento(tipo).subscribe((resp: Medicamento[])=>{
      this.listaMedicamentos = resp
    })
  }

}
