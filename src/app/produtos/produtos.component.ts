import { Doenca } from './../model/Doenca';
import { DoencaService } from './../service/doenca.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { Medicamento } from '../model/Medicamento';
import { MedicamentoItem } from '../model/MedicamentoItem';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutosService } from '../service/produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  medicamento: Medicamento = new Medicamento()
  listaMedicamentos: Medicamento[]

  doenca: Doenca = new Doenca()
  listaDoenca: Doenca[]
  item: MedicamentoItem = new MedicamentoItem()
  qtd: number = 1

  status: boolean = false

  constructor(
    private produtoService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private doencaService: DoencaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllMedicamentos()
    this.findAllDoenca()
  }

  findAllMedicamentos() {
    this.doenca = new Doenca
    this.produtoService.getAllMedicamentos().subscribe((resp: Medicamento[]) => {
      this.listaMedicamentos = resp
      this.status = false
    })
  }

  findAllDoenca() {
    this.doencaService.getAllDoenca().subscribe((resp: Doenca[]) => {
      this.listaDoenca = resp
    })
  }

  findByTipo(tipo: string) {
    this.doenca = new Doenca
    this.produtoService.getTipoMedicamento(tipo).subscribe((resp: Medicamento[]) => {
      this.listaMedicamentos = resp
    })
  }

  findByIdMedicamento(id: number) {
    this.produtoService.getByIdMedicamento(id).subscribe((resp: Medicamento) => {
      this.medicamento = resp
    })
  }

  listForAsc() {
    this.doenca = new Doenca
    this.produtoService.getPrecoAsc().subscribe((resp: Medicamento[]) => {
      this.listaMedicamentos = resp
    })
  }
  listForDesc() {
    this.doenca = new Doenca
    this.produtoService.getPrecoDesc().subscribe((resp: Medicamento[]) => {
      this.listaMedicamentos = resp
    })
  }

  filterDoenca(id: number) {
    this.listaMedicamentos = []
    this.doencaService.getByIdDoenca(id).subscribe((resp: Doenca) => {
      this.doenca = resp
      this.status = true
    })
  }

  validacaoQTD(){
    if (this.qtd <= 0) {
      return true
    }
    return false
  }

  addCarrinho(id: number) {
    if (this.qtd <= 0) {
    } else {
      console.log(this.qtd)
      this.produtoService.getByIdMedicamento(id).subscribe((resp: Medicamento) => {
        this.medicamento = resp

        this.item.foto = this.medicamento.foto
        this.item.nome = this.medicamento.nome
        this.item.precoUni = this.medicamento.preco
        this.item.qtd = this.qtd
        this.item.precoTotal = this.item.precoUni * this.item.qtd

        console.log(this.item)
        this.carrinhoService.add(this.item)

        this.router.navigate(['/carrinho'])
      })
    }
  }
}
