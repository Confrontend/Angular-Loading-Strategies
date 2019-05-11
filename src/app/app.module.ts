import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPreloadingStrategy } from './app-preloading-strategy';
import { LoginComponent } from './eager/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    /*
     EagerOneComponent is not lazy loaded. So it should be declared in here.
     */
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AppPreloadingStrategy],
  bootstrap: [AppComponent],
})
export class AppModule { }
