import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../model/Medicamento';
import { MedicamentoService } from '../service/medicamento.service';

@Component({
  selector: 'app-tela-admin',
  templateUrl: './tela-admin.component.html',
  styleUrls: ['./tela-admin.component.css'],
})
export class TelaAdminComponent implements OnInit {
  medicamento: Medicamento = new Medicamento();
  listaMedicamento: Medicamento[];
  constructor(private medicamentoService: MedicamentoService) {}

  ngOnInit(): void {}

  findAllMedicamentos() {
    this.medicamentoService
      .getAllMedicamentos()
      .subscribe((resp: Medicamento[]) => {
        this.listaMedicamento = resp;
      });
  }

  cadastrar(){
    this.medicamentoService.postMedicamento(this.medicamento).subscribe((resp: Medicamento) => {
      this.medicamento = resp;
      alert('Medicamento criado!');
      this.medicamento = new Medicamento();
      this.findAllMedicamentos();
    })
  this.findAllMedicamentos();
  }
}
