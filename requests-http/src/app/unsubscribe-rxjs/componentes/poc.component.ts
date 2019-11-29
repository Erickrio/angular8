import { tap, takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-poc',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-danger">
    </app-poc-base>
  `
})
export class PocComponent implements OnInit, OnDestroy {

  nome = 'Componente sem unsubscribe';
  valor: string;

  // criando novo observable
  unsub$ = new Subject();

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.service.getValor()
    .pipe(
      tap(v => console.log(this.nome, v)),
      takeUntil(this.unsub$)
    )
    .subscribe(novoValor => this.valor = novoValor);
}
  ngOnDestroy(): void {
    this.unsub$.next(); //ativa a inscrição do observable
    this.unsub$.complete(); //evita o memory lik
    console.log(`${this.nome} foi destruido`);

  }

}
