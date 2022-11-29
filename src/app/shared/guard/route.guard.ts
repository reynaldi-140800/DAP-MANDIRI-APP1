import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, switchAll } from 'rxjs';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private readonly router:Router){}

  private authorize():boolean{
    const authToken:boolean = (sessionStorage.getItem('token')!==null);
    if(!authToken){
      Swal.fire({
        icon:'error',
        title: 'Hayolooo .... ~~~~',
        text: 'LOGIN SEK MAASSSZZEEHH'
      });
      this.router.navigateByUrl('/auth/login')
    }
    return authToken
  }
  
  canActivate(): boolean {
    return this.authorize();
  }

  canActivateChild(): boolean {
    return true;
    }
}