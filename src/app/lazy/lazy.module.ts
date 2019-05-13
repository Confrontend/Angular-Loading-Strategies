import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LandingComponent]
})
export class LazyModule { }
