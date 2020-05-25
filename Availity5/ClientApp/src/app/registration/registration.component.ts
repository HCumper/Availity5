import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl, FormGroupDirective } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { Registration } from './registration';
import { StatesList } from './States';
import { DataService } from '../data.service'

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
  statesList = new StatesList();
  selectFormControl = new FormControl('', Validators.required);
  errorMessage: string;
  selectedState = { value: 'CT', viewValue: 'Connecticut' };
  selected: string;

  constructor(private fb: FormBuilder, private registrationService: DataService) { } 

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
      selectedValue: ['', Validators.required],
      Zip: ['', [Validators.required, Validators.pattern("[0-9]{5}")]],
    })

  }

  setEmailOrPhone(): void {
    const phoneControl = this.registrationForm.get('TelephoneNumber');
    const emailControl = this.registrationForm.get('Email');

    phoneControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
  }

  save(): void {
    if (this.registrationForm.valid) {
      this.registrationService.PutRegistration(this.registration)
        .subscribe; ({
          next: () => this.NotifySaved(),
          error: err => this.errorMessage = err
        })
    } else {
      this.errorMessage = 'Please correct errors';
    }
  }

  matcher = new MyErrorStateMatcher();

  NotifySaved(): void {
    this.registrationForm.reset();
    // display message
  }
}
