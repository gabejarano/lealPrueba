import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Usuario } from '../models/usuario';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  let user: Usuario;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false if a user is not logged in', function () {
    localStorage.clear();
    expect(service.estaLogueado()).toEqual(false); // This test passes 100%
  });


  it('should return true if a user is logged in', function () {
    const dummyUserData = {
      code: 100,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlnREF1RUhWOVllZHM2TXIiLCJmaXJzdE5hbWUiOiJDYXJsb3MiLCJsYXN0TmFtZSI6IkdvbnphbGV6IiwiZW1haWwiOiJjYXJsdHJvbmlrQGdtYWlsLmNvbSIsImlhdCI6MTU5OTUxNDE1NywiZXhwIjoxNTk5NTI4NTU3fQ._fj2n1Mw_BJPZpdN9jrLbggK6ENA8rvQDOdl66_USx8",
      user: {
        "id": "9gDAuEHV9Yeds6Mr",
        "firstName": "Carlos",
        "lastName": "Gonzalez",
        "email": "carltronik@gmail.com"
      }
    }

    user = {
      email: 'carltronik@gmail.com',
      password: '123'
    };

    service.login(user).subscribe(userData => {
      expect(userData).toEqual(dummyUserData);
    })
    const request = httpMock.expectOne(`${service.URI}api/user/login`);
    expect(request.request.method).toBe('POST');
    
  });
});
