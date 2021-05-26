import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  url = 'src\assets\config.json'
  postURL = 'http://localhost:8081/Transaction'
  getURL = 'http://localhost:8081/Transactions'
  constructor(private http: HttpClient) { }

  getDemo(){
    return this.http.get(this.getURL);
  }

  /*Path: /Cuentas1 */
  getTransactions(banco: string){
    return this.http.get(this.getURL+'?database='+banco)
  }

  postTransferencia(data?: any){
    const headers = { 'Content-Type': 'application/json'}
    console.log('data antes de json: ', data)
    const body = JSON.stringify(data);
    console.log('data enviada: ', body)
    this.http.post(this.postURL, body).subscribe((r)=>{
      console.log('respuesta del post: ', r)
    });
  }

}
