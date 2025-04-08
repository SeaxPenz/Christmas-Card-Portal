import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-login',
standalone: true,
imports: [FormsModule, CommonModule],
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {
sapId = '';
password = '';
showPassword = false;

togglePasswordVisibility() {
this.showPassword = !this.showPassword;
}

onSubmit() {
console.log('Form submitted!');
console.log('SAP ID:', this.sapId);
console.log('Password:', this.password);
// **Replace with your actual login logic**
}
}