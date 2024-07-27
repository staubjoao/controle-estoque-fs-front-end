import { Injectable } from '@angular/core';
import { environment } from '../environments/environments'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../models/receita';
@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private apiUrl = `${environment.apiUrl}/receita`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  public post(receita: Receita): Observable<any> {
    return this.http.post<any>(this.apiUrl, receita);
  }

}
