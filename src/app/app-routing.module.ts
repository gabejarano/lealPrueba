import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './componentes/login/login.component';
import {TransaccionesComponent} from './componentes/transacciones/transacciones.component';
import {NoAuthGuard} from './guards/no-auth.guard';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  canActivate: [NoAuthGuard]
},
{
  path: 'transactions',
  component: TransaccionesComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
