import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments'
import { Observable } from 'rxjs';
import { LocalEstoque } from '../models/local-estoque';
import { Producao } from '../models/producao';

@Injectable({
  providedIn: 'root'
})
export class ProducaoService {

  private apiUrl = `${environment.apiUrl}/producao`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Producao[]> {
    return this.http.get<Producao[]>(this.apiUrl);
  }

  public post(producao: Producao): Observable<string> {
    const body = {
        receitaId: producao.receita?.id,
        quantidadeReceitas: producao.quantidadeReceitas
    };
    return this.http.post<string>(this.apiUrl, body, { responseType: 'text' as 'json' });
}

}
