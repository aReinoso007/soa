import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  url = 'src\assets\config.json'
  postURL = 'http://localhost:8081/Transaction'
  constructor(private http: HttpClient) { }

  getDemo(){
    return this.http.get('http://localhost:8081/postdemo');
  }

  /*Path: /Cuentas1 */
  getActivityB1(){

  }
  
  getActivityB2(){
    
  }

  getActivityB3(){
    
  }

  postTransferencia(data?: any){
    this.http.post(this.postURL, data);
  }

}
