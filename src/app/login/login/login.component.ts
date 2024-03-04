import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  feedbackForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      language: ['', Validators.required],
      message: ['', Validators.required]
    });


  }
  submitFeedback() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
    } else {
      this.markAllFieldsAsTouched();
    }
  }
  markAllFieldsAsTouched() {
    Object.keys(this.feedbackForm.controls).forEach(field => {
      const control = this.feedbackForm.get(field);
      control!.markAsTouched({ onlySelf: true });
    });
  }
}
