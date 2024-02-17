import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private formBuilder:FormBuilder){}
    
    profileForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      address:[''],
      dob:[''],
      gender:['']
    });
    saveForm(){
      console.log('Form data is ', this.profileForm.value);
    }


    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    connectWithGoogle() {
      // Implementation for connecting with Google
    }
}
