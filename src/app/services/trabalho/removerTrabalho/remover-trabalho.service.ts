import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IRemoverTrabalho {
  idTrabalho: string,
}

@Injectable({
  providedIn: 'root'
})

export class RemoverTrabalhoService {
  readonly url = 'http://localhost:3000/trabalho';

  constructor(
    private http: HttpClient,
  ) { }

  Execute({idTrabalho}: IRemoverTrabalho){
    return this.http.delete<any>(this.url+idTrabalho);
  }
}
