import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
      FirstName: '',
      LastName: '',
      Email: ''

    })
  }

  save() {
    console.log(this.registrationForm);
    console.log('Saved: ' + JSON.stringify(this.registrationForm.value));
  }

}
