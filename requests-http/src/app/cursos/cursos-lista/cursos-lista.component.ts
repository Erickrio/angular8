import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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

  bsModalRef: BsModalRef;

  //observable
  cursos$: Observable<Curso[]>;

  //subject - objeto que emite valores no rxjs
  error$ = new Subject<boolean>();

  constructor(private service: CursosService,
              private modalService: BsModalService) { }

  ngOnInit() {
    //Inscrição do subscribe - faz dentro do init
    this.onRefresh();
  }

  onRefresh() {
    //Observable
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          // this.error$.next(true);
          this.handleError();
          return empty();
        })
      );
  }

  //Quando acontecer o Erro - Mostra

  handleError(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }

}
