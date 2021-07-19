import { Medicamento } from 'src/app/model/Medicamento';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { MedicamentoItem } from '../model/MedicamentoItem';
import { CarrinhoService } from '../service/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  medicamento: Medicamento = new Medicamento()
  listaMedicamentosDesc: Medicamento[]
  listaMedicamentosProm: Medicamento[]

  qtd: number = 1
  item: MedicamentoItem = new MedicamentoItem()
  
  constructor(
    private medicamentoService: ProdutosService,
    private produtoService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findByCardHome()
  }

  findByCardHome(){
    this.medicamentoService.getMedicamentosDestaque().subscribe((resp: Medicamento[])=>{
      this.listaMedicamentosDesc = resp
    })
    this.medicamentoService.getMedicamentosPromocao().subscribe((resp: Medicamento[])=>{
      this.listaMedicamentosProm = resp
    })
  }

  findByIdMedicamento(id: number) {
    this.medicamentoService.getByIdMedicamento(id).subscribe((resp: Medicamento) => {
      this.medicamento = resp
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
      this.produtoService.getByIdMedicamento(id).subscribe((resp: Medicamento) => {
        this.medicamento = resp

        this.item.foto = this.medicamento.foto
        this.item.nome = this.medicamento.nome
        this.item.precoUni = this.medicamento.preco
        this.item.qtd = this.qtd
        this.item.precoTotal = this.item.precoUni * this.item.qtd

        this.carrinhoService.add(this.item)

        this.router.navigate(['/carrinho'])
      })
    }
  }


}
