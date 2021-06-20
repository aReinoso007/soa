import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  rootURL ='/api';
  getURL='http://localhost:3000/transacciones';
  constructor(private http: HttpClient) { }

  getDemo(){
    return this.http.get(this.rootURL+'transacciones');
  }

  /*Path: /Cuentas1 */
  getTransactions(){
    const headers = {'Content-Type': 'application/json'};
    //return this.http.get(this.rootURL+'/transacciones');
    return this.http.get(this.getURL);
  }

  postTransferencia(data?: any){
    const headers = { 'Content-Type': 'application/json'}
    console.log('data antes de json: ', data)
    const body = JSON.stringify(data);
    console.log('data enviada: ', body)
    this.http.post(this.rootURL+'transaccion', body).subscribe((r)=>{
      console.log('respuesta del post: ', r)
    });
  }

}
