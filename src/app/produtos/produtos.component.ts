import { Component, OnInit } from '@angular/core';
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

  item: MedicamentoItem = new MedicamentoItem()

  constructor(
    private produtoService: ProdutosService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.findAllMedicamentos()
  }

  findAllMedicamentos() {
    this.produtoService.getAllMedicamentos().subscribe((resp: Medicamento[]) => {
      this.listaMedicamentos = resp
    })
  }

  addCarrinho(id: number) {

    this.produtoService.getByIdMedicamento(id).subscribe((resp: Medicamento) => {
      this.medicamento = resp

      this.item.foto = this.medicamento.foto
      this.item.nome = this.medicamento.nome
      this.item.precoUni = this.medicamento.preco
      this.item.precoTotal = this.item.precoUni
      this.item.qtd = 1

      console.log(this.item)
      this.carrinhoService.add(this.item)
    })
  }

}
