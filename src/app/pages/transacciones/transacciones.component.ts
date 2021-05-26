import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss']
})
export class TransaccionesComponent implements OnInit {

  transacciones: any = [];
  banco: string = '';
  constructor(
    private transaccionService: TransaccionesService
  ) { }

  ngOnInit(): void {

  }

  getTransaccion(){
    this.transaccionService.getTransactions(this.banco).subscribe((data: {})=>{
      this.transacciones = data;
      console.log('transacciones obtenidas: ', data)
    })
    this.banco ='';
  }

}
