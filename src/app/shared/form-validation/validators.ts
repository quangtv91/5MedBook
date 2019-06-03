import {FormControl} from '@angular/forms';

export class GlobalValidator {

  static specialAndSpaceCharacter(control: FormControl) {
    const LETTER_NUMBER_REGEX = /^[0-9A-z]*$/;
    if (control && control.value && !LETTER_NUMBER_REGEX.test(control.value.toString().trim())) {
      return {'specialAndSpaceCharacter': true};
    }
    return null;
  }

  static minLength = (min) => {
    return (control: FormControl) => {
      if (control && control.value) {
        if (control.value.length < min) {
          return {
            'minLength': true
          };
        }
      }
      return null;
    };
  };

  static maxLength = (max) => {
    return (control: FormControl) => {
      if (control && control.value) {
        if (control.value.length > max) {
          return {
            'maxLength': true
          };
        }
      }
      return null;
    };
  };

  static emailFormat(control: FormControl) {
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (control && control.value && !EMAIL_REGEXP.test(control.value)) {
      return {
        emailFormat: {
          valid: false,
        }
      };
    }
    return null;
  }


}





