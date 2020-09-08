import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    if(localStorage.getItem('token')==null){
      return true;
    }
    this.router.navigate(['/transactions'])
    return false;
  }
  
}
