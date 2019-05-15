import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MyLibComponent } from './my-lib.component';

const routes: Routes = [
  {
    path: '',
    component: MyLibComponent
  }
];

@NgModule({
  declarations: [MyLibComponent],
  imports: [RouterModule.forChild(routes)]
})
export class MyLibModule { }
