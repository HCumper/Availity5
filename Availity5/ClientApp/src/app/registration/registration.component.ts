import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registration } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registration = new Registration();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      TelephoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],

    })
  }

  setEmailOrOPhone(): void {
    const phoneControl = this.registrationForm.get('TelephoneNumber');
    const emailControl = this.registrationForm.get('Email');

    phoneControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
  }

  save() {
    console.log(this.registrationForm);
    console.log('Saved: ' + JSON.stringify(this.registrationForm.value));
  }

}
