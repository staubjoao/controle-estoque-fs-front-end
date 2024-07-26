import { Injectable } from '@angular/core';
import { environment } from '../environments/environments'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemEstoque } from '../models/item-estoque';

@Injectable({
  providedIn: 'root'
})
export class ItemEstoqueService {

  private apiUrl = `${environment.apiUrl}/item-estoque`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ItemEstoque[]> {
    return this.http.get<ItemEstoque[]>(this.apiUrl);
  }

  public post(itemEstoque: ItemEstoque): Observable<ItemEstoque> {
    return this.http.post<ItemEstoque>(this.apiUrl, itemEstoque);
  }

  public getById(id: number): Observable<ItemEstoque> {
    const urlFinal = this.apiUrl + "/" + id;
    return this.http.get<ItemEstoque>(urlFinal);
  }

  public delete(id: number): Observable<ItemEstoque> {
    const urlFinal = this.apiUrl + "/" + id;
    return this.http.delete<ItemEstoque>(urlFinal);
  }

  public put(itemEstoque: ItemEstoque): Observable<ItemEstoque> {
    const urlFinal = this.apiUrl + "/" + itemEstoque.id;
    return this.http.put<ItemEstoque>(urlFinal, itemEstoque);
  }
}
