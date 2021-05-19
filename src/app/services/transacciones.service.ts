import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  url = 'src\assets\config.json'
  constructor(private http: HttpClient) { }

  getDemo(){
    return this.http.get('http://localhost:8081/postdemo');
  }
}
