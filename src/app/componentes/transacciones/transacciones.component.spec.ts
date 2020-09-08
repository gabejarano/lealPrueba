import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesComponent } from './transacciones.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FilterPipe} from '../../pipes/filter.pipe';
import { Transaccion } from 'src/app/models/transaccion';
import { By } from '@angular/platform-browser';

describe('TransaccionesComponent', () => {
  let component: TransaccionesComponent;
  let fixture: ComponentFixture<TransaccionesComponent>;
 
  
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TransaccionesComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.setItem("token", "12354");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create 2 div<card>', ()=>{
  //   const dummyTransaction: Transaccion[]=[{
  //     _id: "123",
  //     createdDate: new Date(),
  //     points: 10,
  //     type: "earn",
  //     userId: "1234",
  //     value: 55000
  //   },
  //   {
  //     _id: "1234",
  //     createdDate: new Date(),
  //     points: 10,
  //     type: "earn",
  //     userId: "1234",
  //     value: 15000
  //   }]
    
  //   component.transacciones=dummyTransaction;

  //   const elements = fixture.debugElement
  //   .queryAll(By.css("div.card")).length;

  //   expect(elements).toBe(2)

  // })

  
});
