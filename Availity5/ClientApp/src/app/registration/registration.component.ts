import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl, FormGroupDirective } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { Registration } from './registration';
import { StatesList } from './States';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registration = new Registration();
  emailMessage: string;
  statesList = new StatesList();
  state = '';
  selectFormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      NPINumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      TelephoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      AddressLine1: ['', Validators.required],
      AddressLine2: '',
      City: ['', Validators.required],
      StateCode: ['', Validators.required],
      Zip: ['', [Validators.required, Validators.pattern("[0-9]{10}")]]
    })

  }

  setEmailOrPhone(): void {
    const phoneControl = this.registrationForm.get('TelephoneNumber');
    const emailControl = this.registrationForm.get('Email');

    phoneControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
  }

  save() {
    console.log(this.registrationForm);
    console.log('Saved: ' + JSON.stringify(this.registrationForm.value));
  }

  matcher = new MyErrorStateMatcher();
}
