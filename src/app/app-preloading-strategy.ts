import { Route, PreloadingStrategy } from '@angular/router'
import { Observable, timer, of } from 'rxjs'
import { map } from 'rxjs/operators';

export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        return route.data && route.data['preload']
            ? timer(route.data['delay']).pipe(map(_ => load()))
            : of(null);
    }
}