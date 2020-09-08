import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URI:string = "https://pruebatecnica.puntosleal.com/"
  constructor(private http: HttpClient ) { }

  login(usuario: Usuario){
    return this.http.post(this.URI+'api/user/login', usuario);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  estaLogueado(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
