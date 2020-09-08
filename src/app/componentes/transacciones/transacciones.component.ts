import { Component, OnInit } from '@angular/core';
import {TransaccionesService} from '../../servicios/transacciones.service';
import {Transaccion} from '../../models/transaccion';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  constructor(private servicio: TransaccionesService) { }

  transacciones: Transaccion[];
  filterTransaccion="";
  fechaInicio:Date;
  fechaFin:Date;

  getTransactionByDate(){
    
    this.servicio.getTransactionsByDate(this.fechaInicio, this.fechaFin).subscribe(
      (res:any)=>{
        this.transacciones = res.data;
      },
      err=>console.log(err)
    )
  }

  ngOnInit(): void {
    this.servicio.getTransactions().subscribe(
      (res:any)=>{
        this.transacciones = res.data;
      },
      err=>console.log(err)
    );
  }


  

}
