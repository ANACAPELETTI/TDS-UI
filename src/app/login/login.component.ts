import { AuthService } from './../seguranca/auth.service';
import {  Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MessageService} from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

interface IProfs{
  value: string,
  senha: string
}

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
    ) {};


  profs : IProfs[] = [
    {
      value: "a2153726",
      senha: "1234"
    }
  ]

  ngOnInit() {
  };

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
      .then(() => {
        // this.messageService.add({severity:'info', summary:'Sucess', detail:'Login Sucess'});
        this.router.navigate(['home']);
      })
      .catch(erro=> {
        this.errorHandler.handle(erro);
      });
  }
  test(usuario: string, senha: string){
    this.auth.teste(usuario, senha).subscribe((resultado)=>{console.log(resultado)});
  }
}

