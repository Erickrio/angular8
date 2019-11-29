import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarValorService {

  //observable
  private emissor$ = new Subject<string>();

  emitirValor(valor: string) {
    this.emissor$.next(valor);
  }
  //variavel privada- manter nesse componente
  getValor() {
    return this.emissor$.asObservable();
  }

  constructor() { }
}
