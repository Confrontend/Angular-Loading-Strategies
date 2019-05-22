import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTestModule } from 'src/app/shared/shared-test/shared-test.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { PreOneComponent } from './pre-one/pre-one.component';
import { PreRoutingModule } from './pre-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PreRoutingModule,
    SharedModule,
    SharedTestModule
  ],
  declarations: [PreOneComponent]
})
export class PreModule { }
