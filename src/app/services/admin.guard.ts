import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn:'root',
})

class permissionService{
  constructor(private login: LoginService, private router: Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //your logic goes here
    if (this.login.isLoggedIn() && this.login.getUserRole() == 'ADMIN') {
      return true;
    }
    this.router.navigate(['login']);

    return false;
}
}

export const adminGuard: CanActivateFn = (next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean =>{
      return inject(permissionService).canActivate(next, state);
    }