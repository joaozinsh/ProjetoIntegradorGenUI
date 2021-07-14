import { Medicamento } from 'src/app/model/Medicamento';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  medicamento: Medicamento = new Medicamento()
  listaMedicamentosDesc: Medicamento[]
  listaMedicamentosProm: Medicamento[]

  constructor(
    private medicamentoService: ProdutosService
  ) { }

  ngOnInit() {
    console.log(environment.token)
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



}
