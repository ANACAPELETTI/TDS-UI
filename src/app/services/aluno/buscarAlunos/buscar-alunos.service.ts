import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BuscarAlunosService {
  readonly url = 'http://localhost:3000/alunos';

  constructor(
    private http: HttpClient,
  ) { }

  Execute(){
    return this.http.get<any>(this.url);
  }
}
