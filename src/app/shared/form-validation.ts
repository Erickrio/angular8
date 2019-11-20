import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export class FormValidations {
  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : {
        required: true
      };
    };
    return validator;
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      const validaCep = /^[0-9]{8}$/;
      return validaCep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  //validação para dois campos . ex senha e confirmação da senha
  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        console.log((<FormGroup>formControl.root));
        //caso o formulario não seja renderizado
        throw new Error('É necessário informar um campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }

      return null;
    };
    return validator;
  }

  // Retorna a msg de acordo com ERRO - serviço de msg de erros para todos os formularios
  // e mensagem de erro possam ser mostrados de forma consistente
    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'cepInvalido': 'CEP inválido.',
    };

    return config[validatorName];
  }

}
