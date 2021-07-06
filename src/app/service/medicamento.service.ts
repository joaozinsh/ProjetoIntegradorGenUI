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

  baseURL = "https://api-saudedobem.herokuapp.com"

  getAllMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(
      `${this.baseURL}/medicamentos`,
      this.token
    );
  }

  postMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.post<Medicamento>(
      `${this.baseURL}/medicamentos/cadastrar`,
      Medicamento,
      this.token
    );
  }
}
