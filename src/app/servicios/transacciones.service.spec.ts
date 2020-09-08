import { TestBed } from '@angular/core/testing';

import { TransaccionesService } from './transacciones.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Transaccion } from '../models/transaccion';

describe('TransaccionesService', () => {
  let service: TransaccionesService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TransaccionesService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve transactions from the API', () => {
    const dummyTransaction: Transaccion[] = [{
      _id: "123",
      createdDate: new Date(),
      points: 10,
      type: "earn",
      userId: "1234",
      value: 55000
    },
    {
      _id: "1234",
      createdDate: new Date(),
      points: 10,
      type: "earn",
      userId: "1234",
      value: 15000
    }];
    service.getTransactions().subscribe(transactions => {
      expect(transactions.length).toBe(2);
      expect(transactions).toEqual(dummyTransaction);
    });
    const request = httpMock.expectOne(`${service.URI}user/my/transactions`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyTransaction);
  });

  it('should retrieve transactions filter with date from the API', () => {
    let fechaInicio :Date;
    let fechaFin: Date;
    const dummyTransaction: Transaccion[] = [{
      _id: "123",
      createdDate: new Date(),
      points: 10,
      type: "earn",
      userId: "1234",
      value: 55000
    },
    {
      _id: "1234",
      createdDate: new Date(),
      points: 10,
      type: "earn",
      userId: "1234",
      value: 15000
    }];

    service.getTransactionsByDate(fechaInicio, fechaFin).subscribe(transactions => {
      expect(transactions.length).toBe(2);
      expect(transactions).toEqual(dummyTransaction);
    });

    const request = httpMock.expectOne(`${service.URI}user/my/transactions?startDate=${fechaInicio}&endDate=${fechaFin}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyTransaction );
  });

})
