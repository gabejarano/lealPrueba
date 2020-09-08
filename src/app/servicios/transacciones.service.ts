import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Transaccion } from '../models/transaccion';
@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  URI:string = "https://pruebatecnica.puntosleal.com/api/"
  constructor(private http: HttpClient) { }

  getTransactions(){
    return this.http.get<Transaccion[]>(this.URI+"user/my/transactions");
  }

  getTransactionsByDate(fechaInicio:Date, fechaFin:Date){
    return this.http.get<Transaccion[]>(this.URI+`user/my/transactions?startDate=${fechaInicio}&endDate=${fechaFin}`)
  }
}
