import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaCadastroComponent } from './pessoa/pessoa-cadastro/pessoa-cadastro.component';
import { OrientadoresComponent } from './orientadores/orientadores.component';

import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RankingComponent } from './ranking/ranking.component';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
//import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
//import { MessagesModule } from 'primeng/messages';
//import { MessageModule } from 'primeng/message';
import { MenuComponent } from './menu/menu.component';
import { ToolbarModule } from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms'
import { AuthService } from './seguranca/auth.service';
import { MoneyHttp } from './seguranca/money-http';
import { ErrorHandlerService } from './core/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SegurancaRoutingModule } from './seguranca/seguranca-routing.module';
import { TemasComponent } from './tema/temas/temas.component';
import { SegurancaModule } from './seguranca/seguranca.module';
import { VerTemasComponent } from './tema/ver-temas/ver-temas.component';
import { MeusTemasComponent } from './tema/meus-temas/meus-temas.component';

@NgModule({
  declarations: [
    AppComponent,
    OrientadoresComponent,
    RankingComponent,
    MenuComponent,
    PessoaCadastroComponent,
    TemasComponent,
    VerTemasComponent,
    MeusTemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    MenuModule,
    MenubarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,
    ChartModule,
    ProgressSpinnerModule,
    AutoCompleteModule,
    InputTextModule,
    //PasswordModule,
    //MessagesModule,
    //MessageModule,
    ToolbarModule,
    ToastModule,
    TableModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    ConfirmDialogModule,
    RatingModule,
    FormsModule,
    SegurancaRoutingModule,
    SegurancaModule
  ],
  providers: [
    ErrorHandlerService,
    AuthService,
    MoneyHttp,

    ConfirmationService, // Serviço utilizado para o ConfirmDialog do primeng
    MessageService,
    JwtHelperService,
    {provide: LOCALE_ID , useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
