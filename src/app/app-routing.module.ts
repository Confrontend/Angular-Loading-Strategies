import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { AppPreloadingStrategy } from './app-preloading-strategy'
import { LoginComponent } from './eager/login/login.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'landing',
    loadChildren: './lazy/lazy.module#LazyModule',
  },
  {
    path: '',
    loadChildren: './pre/pre.module#PreModule',
    data: {
      preload: true,
      delay: 2000,
    },
  },
  {
    path: 'lib',
    loadChildren: './lib.module#MyLibWrapperModule',
    //loadChildren: () => import('my-lib').then(m => m.MyLibModule),
    /*
     Angular 8 -->
     With current version, we get this error in browser when using --prod
     ERROR Error: Uncaught (in promise): Error: Runtime compiler is not loaded
     */
  },
]

@NgModule({
  imports: [
    CommonModule,
    /*
     The method is called forRoot() because you configure the router at the application's root level.
     The forRoot() method supplies the service providers and directives needed for routing,
     and performs the initial navigation based on the current browser URL.
     https://angular.io/tutorial/toh-pt5
     */
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppPreloadingStrategy,
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
