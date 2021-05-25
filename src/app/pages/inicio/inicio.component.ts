import { Component, OnInit } from '@angular/core';
import { CuentaBancaria } from 'src/app/model/cuentaBancaria.model';
import { Transaccion } from 'src/app/model/transaction.model';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  cuentaBancaria: CuentaBancaria = new CuentaBancaria();
  transaccion: Transaccion = new Transaccion();

  constructor(
    private transaccionesService: TransaccionesService
  ) { }

  ngOnInit(): void {
    //this.getDemo();
  }

  getDemo(){
    return this.transaccionesService.getDemo().subscribe(data=>{
      console.log("Data obtenida: " + data);
    })
  }

  transferir(){
    const data = JSON.stringify(this.transaccion)
    console.log('data enviada: ', data);
    return this.transaccionesService.postTransferencia(data);
  }

}
