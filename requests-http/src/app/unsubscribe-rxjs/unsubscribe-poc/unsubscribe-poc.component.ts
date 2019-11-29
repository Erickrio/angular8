import { EnviarValorService } from './../enviar-valor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.scss']
})
export class UnsubscribePocComponent implements OnInit {

  mostrarComponentes = true;

constructor(private service: EnviarValorService) { }

  ngOnInit() {
  }

  emitirValor(valor: string){
    this.service.emitirValor(valor);
  }

  //muda o valor - true passa ser false(vise e versa)
  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;

  }

}
