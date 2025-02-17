import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/services/userService/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class RegisterUserComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService) {}

  onSubmit() {
    if (this.registerForm.valid) {
      //create action

      this.userService.registerUser(this.registerForm.value);
    } else {
      alert('some fields are missing');
    }
  }
}
