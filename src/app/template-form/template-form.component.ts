import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(formulario) {
    console.log(formulario);

    // form.value
    // console.log(this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe(dados => {
        console.log(dados);
        formulario.form.reset();
      });
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;

  }
  aplicaCssErro(campo){
    return{
      'has-error':this.verificaValidTouched(campo),
      'has-feedback':this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: string, form) {

    console.log(cep);

    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.resetaDadosFormulario(form);
         this.http.get(`//viacep.com.br/ws/${cep}/json`)
        // this.httpClient.get(`//viacep.com.br/ws/${cep}/json`)
         .pipe(map(dados =>  dados))
         .subscribe(dados => this.populaDadosForm(dados , form))
      }
    }


  }

  populaDadosForm(dados , formulario){
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     rua: dados.logradouro ,
    //     cep: dados.cep ,
    //     numero:'' ,
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }

    // });
        formulario.form.patchValue({
          endereco: {
            rua: dados.logradouro ,
            cep: dados.cep ,
            complemento: dados.complemento,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }

        });

  }

  resetaDadosFormulario(formulario){
     formulario.form.patchValue({
          endereco: {
            rua: null ,
            complemento: null,
            bairro: null,
            cidade:null,
            estado:null
          }

        });

  }
}
