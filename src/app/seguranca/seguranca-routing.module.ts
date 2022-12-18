import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
