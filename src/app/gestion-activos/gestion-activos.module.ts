import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GestionActivosComponent} from './gestion-activos.component';
import {GestionRoutingModule} from './gestion-routing.module';
@NgModule({
  imports: [
    CommonModule,
    GestionRoutingModule
  ],
  declarations: [
    GestionActivosComponent
  ]
})
export class GestionActivosModule { }
