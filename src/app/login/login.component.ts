import { AuthService } from './../seguranca/auth.service';
import {  Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MessageService} from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginUsuarioService } from '../services/usuario/loginUsuario/login-usuario.service';
import { LocalStorageService } from '../services/localStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [
    MessageService,
    AuthService
  ],
  styleUrls: ['./login.component.css'],

  styles: [
        `:host ::ng-deep .p-password input {
            width: 15rem;
        }
        :host ::ng-deep .p-message-custom {
            background-color: #E1CFE7;
            border: solid #8A427A;
            border-width: 0 0 0 6px;
            color: #2c1e30;
        }

        :host ::ng-deep .p-message-close-icon {
            color: #2c1e30;
        }
        `
    ]

})

export class LoginComponent implements OnInit {
constructor(
    private messageService: MessageService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private loginUsuarioService : LoginUsuarioService,
    private localStorageService : LocalStorageService
    ) {};

  ngOnInit() {
  };

  Login(usuario: string, senha: string){
    this.loginUsuarioService.Execute({senha: senha, RA: usuario}).subscribe((retorno)=>{
      // console.log(retorno.token);
      if(retorno.refreshToken){
        this.localStorageService.clear();//Limpar o localStorage
        this.localStorageService.set("token",retorno.token); //salva no localStorage o token
        this.router.navigate(['/home']); //redireciona o usuário para login
      }
    });
  }
}

