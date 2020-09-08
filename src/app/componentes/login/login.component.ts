import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../servicios/login.service';
import {Usuario} from '../../models/usuario';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario ={
    email:"",
    password: ""
  };

  constructor(private service: LoginService, private router:Router, private flassMessages:FlashMessagesService ) { }
  login(){
    
    this.service.login(this.usuario).subscribe(
      (res:any)=>{
        localStorage.setItem("token", res.token)
        this.router.navigate(['/transactions'])
        window.location.reload();

      }, err=>{
        this.flassMessages.show('Contraseña o correo incorrecto, por favor intentalo de nuevo', { cssClass: 'materialert.danger', timeout: 5000 });
      }
    );
  }

  ngOnInit(): void {
    
  }

}
