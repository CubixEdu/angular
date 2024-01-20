import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username?: string;

  constructor(private readonly authService: AuthService) { }

  login() {
    if(this.username) {
      this.authService.login(this.username);
    }
  }
}
