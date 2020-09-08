import { Pipe, PipeTransform } from '@angular/core';
import { Transaccion } from '../models/transaccion';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Transaccion[], args: number): Transaccion[] {
    if( args===null || args.toString()==="" || args.toString().length<2 )return value;
    const resultTransaction = [];
    for(const transaccion of value){
      if(transaccion.value<args){
        resultTransaction.push(transaccion)
      }
    }
    return resultTransaction;

  }

}
