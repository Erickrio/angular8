import { tap } from 'rxjs/operators';
import { EnviarValorService } from './../enviar-valor.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-poc-take-until',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-primary">
    </app-poc-base>
  `
})
export class PocTakeUntilComponent implements OnInit , OnDestroy {

  nome = 'Componente com takeUntil';
  valor: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.service.getValor()
    .pipe(tap(v=>console.log(this.nome, v)))
    .subscribe(novoValor => this.valor = novoValor);

  }

  ngOnDestroy(): void {
    console.log(`${this.nome} foi destruido`);

  }
}
