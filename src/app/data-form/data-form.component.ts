import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
      nome:[null,
        Validators.required],
        // Validators.minLength(3),
        // Validators.maxLength(20)],
      email:[null,[Validators.required,
      Validators.email]]
    });
  }

  onSubmit(){
    console.log(this.formulario);
    this.http .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .subscribe(dados => { console.log(dados);
      //reseta form
      // this.formulario.reset();
      // this.resetar();

    },
    (error: any)=>alert('erro'));
  }

  resetar(){
    this.formulario.reset();
  }


  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }


  aplicaCssErro(campo){
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),

    }
  }

}


