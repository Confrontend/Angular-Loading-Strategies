import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedTestModule } from 'src/app/shared/shared-test/shared-test.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { LazyRoutingModule } from './lazy-routing.module'
import { LandingComponent } from './landing/landing.component'

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule,
    SharedTestModule,
  ],
  declarations: [ LandingComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class LazyModule {}
