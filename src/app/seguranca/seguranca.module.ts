import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { MoneyHttpInterceptor } from './money-http-interceptor';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { environment } from 'src/environment/environment';

import { PasswordModule } from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

export function tokenGetter(): string {
  return localStorage.getItem('token')!;
}

@NgModule({
  declarations: [LoginComponent],
  imports: [

    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,

    SegurancaRoutingModule,
    PasswordModule,
    MessagesModule,
    MessageModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,

          /* Caminhos adicionados em environment.prod.ts com expressão regular
          [
          'http://localhost:8080',
          'localhost:8080',
          'https://algamoney-api-giuvane.herokuapp.com',
          'algamoney-api-giuvane.herokuapp.com',
          ],
          */

        blacklistedRoutes: environment.tokenBlacklistedRoutes

          /* Caminhos adicionados em environment.prod.ts com expressão regular
          [
          'http://localhost:8080/oauth/token',
          'localhost:8080/oauth/token',
          'https://algamoney-api-giuvane.herokuapp.com/oauth/token',
          'algamoney-api-giuvane.herokuapp.com/oauth/token'
          ]
          */

      }
    })
  ],
  providers: [
    AuthGuard
  ]
})
export class SegurancaModule { }
