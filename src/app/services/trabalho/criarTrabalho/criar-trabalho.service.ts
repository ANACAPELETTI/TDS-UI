import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ICriarTrabalho {
  tema: string,
  descricao: string,
  idAluno: string,
  idCoorientador?: string,
  idOrientador: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})

export class CriarTrabalhoService {
  readonly url = 'http://localhost:3000/trabalho';

  constructor(
    private http: HttpClient,
  ) { }

  Execute({tema, descricao, idAluno, idOrientador, idCoorientador, token}: ICriarTrabalho){
    // return this.http.post<any>(this.url, {headers:{"Authorization":"Bearer "+token}, body: {tema, descricao, idAluno, idOrientador, idCoorientador}});
    // return this.http.post<any>(this.url, {tema, descricao, idAluno, idOrientador, idCoorientador,headers:{"Authorization":"Bearer "+token}});
    return this.http.post<any>(this.url, {tema, descricao, idAluno, idOrientador, idCoorientador},{headers:{"Authorization":"Bearer "+token}});
  }
}
