import { CommonModule } from '@angular/common'
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { LazyElementComponent } from './lazy-element.component'
import { createCustomElement } from '@angular/elements'

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    LazyElementComponent,
  ],
  entryComponents: [
    LazyElementComponent,
  ],
})
export class LazyElementModule {

  constructor(private injector: Injector) {
    const lazyElm = createCustomElement(LazyElementComponent, { injector: this.injector })
    customElements.define('lazy-element', lazyElm)
  }

}
