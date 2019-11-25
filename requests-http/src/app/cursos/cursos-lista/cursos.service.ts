import { tap } from 'rxjs/operators';
import { Curso } from './../curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //não pode atualizar o valor dessa variavel
  private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API)
    .pipe(
      tap(console.log)  //DEBUGAR - network
    )
  }
}
