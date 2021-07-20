import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Doenca } from '../model/Doenca';

@Injectable({
  providedIn: 'root'
})
export class DoencaService {

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

  getAllDoenca(): Observable<Doenca[]> {
    return this.http.get<Doenca[]>(`${this.baseURL}/doencas`, this.token)
  }

  getByIdDoenca(id: number): Observable<Doenca> {
    return this.http.get<Doenca>(`${this.baseURL}/doencas/id/${id}`, this.token)
  }

  postDoenca(doenca: Doenca): Observable<Doenca> {
    this.refreshToken()
    return this.http.post<Doenca>(`${this.baseURL}/doencas/cadastrar`, doenca, this.token)
  }

  putDoenca(doenca: Doenca): Observable<Doenca> {
    this.refreshToken()
    return this.http.put<Doenca>(`${this.baseURL}/doencas/alterar`, doenca, this.token)
  }

  deleteDoenca(id: number) {
    this.refreshToken()
    return this.http.delete(`${this.baseURL}/doencas/deletar/${id}`, this.token)
  }
}
