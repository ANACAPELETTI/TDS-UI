import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ILoginService {
  RA: string,
  senha: string
}

@Injectable({
  providedIn: 'root'
})

export class LoginUsuarioService {
  readonly url = 'http://localhost:3000/login/';

  constructor(
    private http: HttpClient,
  ) { }

  Execute({RA , senha}: ILoginService){
    return this.http.post<any>(this.url, {RA, senha});
  }
}
