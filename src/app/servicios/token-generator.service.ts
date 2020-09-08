import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login.service'

@Injectable({
  providedIn: 'root'
})
export class TokenGeneratorService implements HttpInterceptor {

  constructor(private serviceLogin: LoginService) { }
  intercept(req, next) {
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.serviceLogin.getToken()}`
      }
    })
    return next.handle(tokenReq)

  }
}


