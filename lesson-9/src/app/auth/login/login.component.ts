import { Component, DestroyRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email?: string;
  password?: string;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly destroyRef: DestroyRef
  ) {}

  login() {
    if(this.email && this.password) {
      this.authService.login(this.email, this.password).pipe(
        tap(() => this.router.navigate(['/ideas'])),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe()
    }
  }
}
