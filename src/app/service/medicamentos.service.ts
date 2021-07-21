import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Medicamento } from '../model/Medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  baseURL = "https://api-saudedobem.herokuapp.com"

  getAllMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.baseURL}/medicamentos`, this.token)
  }

  getByIdMedicamento(id: number): Observable<Medicamento> {
    return this.http.get<Medicamento>(`${this.baseURL}/medicamentos/id/${id}`, this.token)
  }

  postMedicamentos(medicamento: Medicamento): Observable<Medicamento> {
    this.refreshToken()
    return this.http.post<Medicamento>(`${this.baseURL}/medicamentos/cadastrar`, medicamento, this.token)
  }

  putMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    this.refreshToken()
    return this.http.put<Medicamento>(`${this.baseURL}/medicamentos/alterar`, medicamento, this.token)
  }

  getTipoMedicamento(tipo: string): Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>(`${this.baseURL}/medicamentos/tipo/${tipo}`, this.token)
  }

  getPrecoAsc(): Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>(`${this.baseURL}/medicamentos/preco-asc`, this.token)
  }

  getPrecoDesc(): Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>(`${this.baseURL}/medicamentos/preco-desc`, this.token)
  }

  getMedicamentosDestaque(): Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>(`${this.baseURL}/medicamentos/destaque`, this.token)
  }

  getMedicamentosPromocao(): Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>(`${this.baseURL}/medicamentos/promocao`, this.token)
  }

  deleteMedicamento(id: number) {
    this.refreshToken()
    return this.http.delete<Medicamento>(`${this.baseURL}/medicamentos/deletar/${id}`, this.token) 
  }

}
