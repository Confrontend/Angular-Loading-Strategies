import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PreOneComponent } from './pre-one/pre-one.component';

const routes: Routes = [
  {
    path: '',
    component: PreOneComponent,
  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class PreRoutingModule {}
