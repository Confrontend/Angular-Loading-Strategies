import { Component, OnInit } from '@angular/core'
import { LazyDynamicService } from 'src/app/lazy/landing/lazy-dynamic.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ],
})
export class LandingComponent implements OnInit {

  constructor(private lazyService: LazyDynamicService) { }

  ngOnInit() {

  }

  lazyLoadModulde() {
    this.lazyService.load()
        .then(_ => {
          if (!window.customElements.get('lazy-element')) {
            const elm = document.createElement('lazy-element')
            const content = document.getElementsByClassName('content')[ 0 ]
            content.appendChild(elm)
          }
        })
  }

}
