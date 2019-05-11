import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreOneComponent } from './pre-one/pre-one.component';
import { PreRoutingModule } from './pre-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PreRoutingModule
  ],
  declarations: [PreOneComponent]
})
export class PreModule { }
