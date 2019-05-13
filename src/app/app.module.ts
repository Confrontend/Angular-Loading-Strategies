import { LazyElementComponent } from './lazy/lazy-element/lazy-element.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPreloadingStrategy } from './app-preloading-strategy';
import { LoginComponent } from './eager/login/login.component';
import { LazyElementModule } from './lazy/lazy-element/lazy-element.module';

@NgModule({
  declarations: [
    AppComponent,
    /*
     LoginComponent is not lazy loaded. So it should be declared in here.
     */
    LoginComponent
  ],
  imports: [
    LazyElementModule,
    BrowserModule,
    AppRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AppPreloadingStrategy],
  bootstrap: [AppComponent] 
})
export class AppModule { }
