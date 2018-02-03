import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_guards/auth.guard';
import {GestionActivosComponent} from './gestion-activos/gestion-activos.component';

const appRoutes : Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'gestionactivos',component:GestionActivosComponent,canActivate:[AuthGuard]},
  {path:'**',redirectTo: ''}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
