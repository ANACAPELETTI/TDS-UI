import { PessoaCadastroComponent } from './pessoa/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoa/pessoa-pesquisa/pessoa-pesquisa.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RankingComponent } from './ranking/ranking.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrientadoresComponent } from './orientadores/orientadores.component';
import { NaoAutorizadoComponent } from './core/naoAutorizado.component';
import { TemasComponent } from './tema/temas/temas.component';
import { VerTemasComponent } from './tema/ver-temas/ver-temas.component';
import { MeusTemasComponent } from './tema/meus-temas/meus-temas.component';
//import { MeusTemasComponent } from './tema/meus-temas/meus-temas.component';

const routes: Routes =[
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'home',
    component: MenuComponent,
    children: [
      {
        path:'orientadores',
        component: OrientadoresComponent,
      },
      {
        path:'',
        component: OrientadoresComponent,
      },
      {
        path:'ranking',
        component: RankingComponent
      },
      {
        path:'pessoa',
        component: PessoaCadastroComponent
      },
      {
        path:'temas',
        component: TemasComponent
      },
      {
        path:'verTemas',
        component: VerTemasComponent
      }
      ,
      {
        path:'meusTemas',
        component: MeusTemasComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
