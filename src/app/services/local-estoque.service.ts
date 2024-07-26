import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments'
import { Observable } from 'rxjs';
import { LocalEstoque } from '../models/local-estoque';

@Injectable({
  providedIn: 'root'
})
export class LocalEstoqueService {

  private apiUrl = `${environment.apiUrl}/local-estoque`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<LocalEstoque[]> {
    return this.http.get<LocalEstoque[]>(this.apiUrl);
  }

  public post(localEstoque: LocalEstoque): Observable<LocalEstoque> {
    return this.http.post<LocalEstoque>(this.apiUrl, localEstoque);
  }

  public getById(id: number): Observable<LocalEstoque> {
    const urlFinal = this.apiUrl + "/" + id;
    return this.http.get<LocalEstoque>(urlFinal);
  }

  public delete(id: number): Observable<LocalEstoque> {
    const urlFinal = this.apiUrl + "/" + id;
    return this.http.delete<LocalEstoque>(urlFinal);
  }

  public put(localEstoque: LocalEstoque): Observable<LocalEstoque> {
    const urlFinal = this.apiUrl + "/" + localEstoque.id;
    return this.http.put<LocalEstoque>(urlFinal, localEstoque);
  }
}
