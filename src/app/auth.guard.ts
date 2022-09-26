import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoService } from './info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public info: InfoService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isValidUser = false;
    this.info.Roles.forEach(element => {
      if (this.info.LoggedInUser == element.Name && element.Role == "Admin") {
        isValidUser = true;
      }
    });
    return isValidUser;
  }

}
