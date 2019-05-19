import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppPreloadingStrategy } from './app-preloading-strategy'
import { LoginComponent } from './eager/login/login.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    /*
     LoginComponent is not lazy loaded. So it should be declared in here.
     */
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [AppPreloadingStrategy],
  bootstrap: [AppComponent],
})
export class AppModule { }
