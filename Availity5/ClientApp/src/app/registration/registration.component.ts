import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registration = new Registration();

  constructor() { }

  ngOnInit(): void {
  }

  save(registrationForm: NgForm) {
    console.log(registrationForm.form);
    console.log('Saved: ' + JSON.stringify(registrationForm.value));
  }

}
