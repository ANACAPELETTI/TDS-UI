import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // oauthTokenUrl = 'http://localhost:8080/oauth/token';
  oauthTokenUrl: string;
  jwtPayload: any;

  // tokensRevokeurl = 'http://localhost:8080/tokens/revoke';
  tokensRevokeurl: string;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) {
      this.carregarToken();
      this.oauthTokenUrl = `http://localhost:8080/oauth/token`;
      this.tokensRevokeurl = `http://localhost:8080/tokens/revoke`;
    }

  // teste(usuario: string, senha: string){
  //   const headers = new HttpHeaders()
  //   .append('Content-Type', 'application/x-www-form-urlencoded')
  //   .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

  //   const body = `username=${usuario}&password=${senha}&grant_type=password`;

  //   return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true });
  // }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.access_token);
      })
      .catch(response => {
        console.log(response);
        if (response.status === 400) {
          if (response.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }

        return Promise.reject(response);
      });
  }

  obterNovoAccessToken(): Promise<void | null> {//não tinha o null
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.access_token);

        console.log('Novo access token criado!');

        return Promise.resolve(null);
      })
      .catch(response => {
        console.log('Erro ao renovar token', response);
        return Promise.resolve(null);
      });
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  logout() {
    return this.http.delete(this.tokensRevokeurl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.limparAccessToken();
      });
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles: any) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }

    return false;
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token); // Permite que acesse um objeto de armazenamento que guarda os dados no navegador do usuário
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }
}
