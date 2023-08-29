import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,  
  Router,
} from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard {
  constructor(private dataService: ApiService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    let routeurl: string = state.url as string;
    // return this.isLogin(routeurl);
    return true;
  }

//   isLogin(routeurl: string|undefined) {
//     if (this.dataService.isLoggedIn()) {
//       return true;
//     }

//     this.dataService.redirectUrl = routeurl as string;
//     this.router.navigate(['/login'], { queryParams: { returnUrl: routeurl } });
//   }
}
