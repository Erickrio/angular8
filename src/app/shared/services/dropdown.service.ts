import { EstadoBr } from './../models/estado-br';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }
  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ];
  }

  getTecnologias() {
    return [
      { nome: 'Java', desc: 'java' },
      { nome: 'JavaScript', desc: 'JavaScript' },
      { nome: 'Php', desc: 'PHP' },
      { nome: 'ruby', desc: 'ruby' }
    ];
  }
  getNewsletter(){
    return [
      { valor: 's' , desc: 'Sim' },
      { valor: 'n' , desc: 'Não' },
    ];
  }
}
