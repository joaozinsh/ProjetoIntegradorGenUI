import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Medicamento } from '../model/Medicamento';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  getAllMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(
      'https://api-saudedobem.herokuapp.com/medicamentos',
      this.token
    );
  }

  postMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.post<Medicamento>(
      'https://api-saudedobem.herokuapp.com/medicamentos/cadastrar',
      Medicamento,
      this.token
    );
  }
}
