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
  baseURL = "https://api-saudedobem.herokuapp.com"

  getAllDoenca(): Observable<Doenca[]> {
    return this.http.get<Doenca[]>(`${this.baseURL}/doencas`, this.token)
  }

  postDoenca(doenca: Doenca): Observable<Doenca> {
    return this.http.post<Doenca>(`${this.baseURL}/doencas/cadastrar`, doenca, this.token)
  }
}
