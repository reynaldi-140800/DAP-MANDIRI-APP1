import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private readonly router:Router){}
  canActivate(): boolean{
    return this.authorize()
  }
  canActivateChild(): boolean{
    return this.authorize()
  }

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
}
