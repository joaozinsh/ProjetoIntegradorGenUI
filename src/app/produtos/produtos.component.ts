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

  item: MedicamentoItem = new MedicamentoItem()
  qtd: number = 1

  constructor(
    private produtoService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllMedicamentos()
  }

  findAllMedicamentos() {
    this.produtoService.getAllMedicamentos().subscribe((resp: Medicamento[]) => {
      this.listaMedicamentos = resp
    })
  }

  findByIdMedicamento(id: number){
    this.produtoService.getByIdMedicamento(id).subscribe((resp: Medicamento) => {
      this.medicamento = resp
    })
  }

  addCarrinho(id: number) {

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
