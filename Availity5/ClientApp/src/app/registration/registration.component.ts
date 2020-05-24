import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Registration } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registration = new Registration();
  emailMessage: string;

  private ValidationMessages = {
    required: 'Please enter the email address.',
    email: 'Invalid email address'
}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      TelephoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],

    })

    const emailControl = this.registrationForm.controls.Email;
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );
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

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.ValidationMessages[key]).join(' ');
    }
  }
}
