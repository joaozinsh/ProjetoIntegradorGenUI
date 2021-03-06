import { Doenca } from '../model/Doenca';
import { DoencaService } from '../service/doenca.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicamento } from '../model/Medicamento';
import { MedicamentoItem } from '../model/MedicamentoItem';
import { CarrinhoService } from '../service/carrinho.service';
import { MedicamentosService } from '../service/medicamentos.service';


@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  medicamento: Medicamento = new Medicamento()
  listaMedicamentos: Medicamento[]

  doenca: Doenca = new Doenca()
  listaDoenca: Doenca[]
  item: MedicamentoItem = new MedicamentoItem()
  qtd: number = 1

  status: boolean = false

  constructor(
    private medicamentoService: MedicamentosService,
    private carrinhoService: CarrinhoService,
    private doencaService: DoencaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllMedicamentos()
    this.findAllDoenca()
  }

  voltarTopo(){
    window.scroll(0,0)
  }

  findAllMedicamentos() {
    this.doenca = new Doenca
    this.medicamentoService.getAllMedicamentos().subscribe((resp: Medicamento[]) => {
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
    this.medicamentoService.getTipoMedicamento(tipo).subscribe((resp: Medicamento[]) => {
      this.listaMedicamentos = resp
    })
  }

  findByIdMedicamento(id: number) {
    this.medicamentoService.getByIdMedicamento(id).subscribe((resp: Medicamento) => {
      this.medicamento = resp
    })
  }

  listForAsc() {
    this.doenca = new Doenca
    this.medicamentoService.getPrecoAsc().subscribe((resp: Medicamento[]) => {
      this.listaMedicamentos = resp
    })
  }
  listForDesc() {
    this.doenca = new Doenca
    this.medicamentoService.getPrecoDesc().subscribe((resp: Medicamento[]) => {
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
      this.medicamentoService.getByIdMedicamento(id).subscribe((resp: Medicamento) => {
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
