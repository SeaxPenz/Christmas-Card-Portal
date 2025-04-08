import { Component } from '@angular/core';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.css']
})
export class HomeTwoComponent {
  sapId: string = '';
  password: string = '';
  showPassword: boolean = false;

  onSubmit(): void {
    console.log('Form submitted with:', { sapId: this.sapId, password: this.password });
    
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}