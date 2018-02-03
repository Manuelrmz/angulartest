import { NgModule } from '@angular/core';
import {Route,RouterModule} from '@angular/router';
import {GestionActivosComponent} from './gestion-activos.component';
const childRoot : Route[] = [
  {path:'gestionactivos',component:GestionActivosComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(childRoot)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class GestionRoutingModule { }
