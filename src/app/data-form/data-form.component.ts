import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  //tipo form  - formularios reativos
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient

  ) { }


  ngOnInit() {
    //Inicio do componente
    this.formulario = this.formBuilder.group({
      nome: [null,
        Validators.required],
      // Validators.minLength(3),
      // Validators.maxLength(20)],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.formulario);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(dados => {
          console.log(dados);
          //reseta form
          this.formulario.reset();
          // this.resetar();

        },
          (error: any) => alert('erro'));

    } else {
      console.log('formulario invalido')
      this.verificaValidacoesForm(this.formulario);

    }

  }
  // faz validações do formulario - apertando o submit p campos que não forem modificados

  verificaValidacoesForm(formGroup: FormGroup)  {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty() // dirty - campo modificado
      if (controle instanceof FormGroup){
        // caso seja verificado as validações do form
          this.verificaValidacoesForm(controle);

      }
    });

  }

  resetar() {
    this.formulario.reset();
  }


  verificaEmailInvalido(campo: string) {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }


  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }


  consultaCEP() {

    let cep = this.formulario.get('endereco.cep').value;


    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.resetaDadosFormulario();
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          // this.httpClient.get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados))
          .subscribe(dados => this.populaDadosForm(dados))
      }
    }


  }

  populaDadosForm(dados) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep ,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }

    });

  }

  resetaDadosFormulario() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }

    });

  }

}


