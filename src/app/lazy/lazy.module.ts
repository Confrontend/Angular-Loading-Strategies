import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOneComponent } from './lazy-one/lazy-one.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazyOneComponent]
})
export class LazyModule { }
