import { Transaction } from './../../model/transaction.model';
import { Component, OnInit } from '@angular/core';
import { CuentaBancaria } from 'src/app/model/cuentaBancaria.model';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  cuentaBancaria: CuentaBancaria = new CuentaBancaria();
  transaccion: Transaction = new Transaction();
  

  constructor(
    private transaccionesService: TransaccionesService
  ) { }

  ngOnInit(): void {
    
  }

  getDemo(){
    return this.transaccionesService.getDemo().subscribe(data=>{
      console.log("Data obtenida: " + data);
    })
  }

  transferir(){
    return this.transaccionesService.postTransferencia(this.transaccion)
  }

}
