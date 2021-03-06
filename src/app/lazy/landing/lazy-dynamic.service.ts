import { Injectable, Injector, NgModuleFactoryLoader, NgModuleRef } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LazyDynamicService {

  constructor(private loader: NgModuleFactoryLoader,
              private injector: Injector) { }

  private moduleRef: NgModuleRef<any>

  load(): Promise<void> {

    if (this.moduleRef) {
      return Promise.resolve()
    }

    const path = 'src/app/lazy/lazy-element/lazy-element.module#LazyElementModule'

    return this
      .loader
      .load(path)
      .then(moduleFactory => {
        this.moduleRef = moduleFactory.create(this.injector).instance
      })
      .catch(err => {
        console.error('error loading module', err)
      })
  }
}
