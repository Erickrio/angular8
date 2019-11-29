import { Observable, empty, Subject } from 'rxjs';
import { Curso } from './../curso';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true // Opção 2 - Espaço entre botoes
})
export class CursosListaComponent implements OnInit {
  // cursos: Curso[];

  //observable
  cursos$: Observable<Curso[]>

  //subject - objeto que emite valores no rxjs
  error$ = new Subject<boolean>();

  constructor(private service: CursosService) { }

  ngOnInit() {

    //Inscrição do subscribe - faz dentro do init

    // this.service.list()
    // .subscribe(dados => this.cursos = dados);

    //Observable
    this.cursos$ =  this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );

  }

}
