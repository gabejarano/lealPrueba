import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';
import { TokenGeneratorService } from './servicios/token-generator.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { TransaccionesComponent } from './componentes/transacciones/transacciones.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransaccionesComponent,
    FilterPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AuthGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenGeneratorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
