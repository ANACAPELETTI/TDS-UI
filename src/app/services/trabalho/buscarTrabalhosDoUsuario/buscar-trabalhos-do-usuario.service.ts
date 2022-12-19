import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IBuscarTrabalho {
  idUsuario: string,
}

@Injectable({
  providedIn: 'root'
})

export class BuscarTrabalhosDoUsuarioService {
  readonly url = 'http://localhost:3000/trabalho';

  constructor(
    private http: HttpClient,
  ) { }

  Execute({idUsuario}: IBuscarTrabalho){
    return this.http.get<any>(this.url+idUsuario);
  }
}
