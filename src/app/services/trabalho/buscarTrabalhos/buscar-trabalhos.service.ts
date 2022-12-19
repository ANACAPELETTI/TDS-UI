import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IBuscarTrabalhos{
  token:string
}

@Injectable({
  providedIn: 'root'
})

export class BuscarTrabalhosService {
  readonly url = 'http://localhost:3000/trabalho';

  constructor(
    private http: HttpClient,
  ) { }

  Execute({token}:IBuscarTrabalhos){
    return this.http.get<any>(this.url, {headers:{"Authorization":"Bearer "+token}});
  }
}
