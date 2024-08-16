import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Add ReactiveFormsModule to imports
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'] // Corrected to styleUrls (plural)
})
export class FormComponent {
  myForm!: FormGroup; // Add definite assignment assertion (!)
  submittedData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.submittedData = this.myForm.value;
      this.myForm.reset();
    }
  }
}
