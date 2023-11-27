import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AgendamentoAtualizarDto, AgendamentoRequestDto } from '../types/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private baseUrl: string = environment.baseUrl;
  private token: string | null;
  private id: string | null;
  private headers: HttpHeaders

  constructor(
    private http: HttpClient
  ) {
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('id')
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  listarConsultas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/agendamentos/${this.id}`, { headers: this.headers })
  }

  agendarConsulta(request: AgendamentoRequestDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/agendamentos/${this.id}`, request, { headers: this.headers })
  }

  atualizarConsulta(request: AgendamentoAtualizarDto): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/agendamentos`, request, { headers: this.headers })
  }

  delete(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/agendamentos/${userId}`, { headers: this.headers })
  }

}
