import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){}

  canActivate(): Observable<boolean>{
    return this.userService.getUser().pipe(
      map(user => {
        console.log(user);
        if(!user){
          this.router.navigateByUrl('login');
          return false;
        }
        return true;
      })
    );
  }
}
