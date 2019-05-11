import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LazyOneComponent } from './lazy-one/lazy-one.component'

const routes: Routes = [
  {
    path: '',
    component: LazyOneComponent,
  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class LazyRoutingModule {}
