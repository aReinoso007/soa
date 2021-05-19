import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(
    private transaccionesService: TransaccionesService
  ) { }

  ngOnInit(): void {
    this.getDemo();
  }

  getDemo(){
    return this.transaccionesService.getDemo().subscribe(data=>{
      console.log("Data obtenida: " + data);
    })
  }

}
