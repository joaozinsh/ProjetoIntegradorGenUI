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

  constructor(
    private produtoService: ProdutosService
  ) { }

  ngOnInit(){
    this.findAllMedicamentos()
  }

  findAllMedicamentos() {
    this.produtoService.getAllMedicamentos().subscribe((resp: Medicamento[])=> {
      this.listaMedicamentos = resp
    })
  }

}
