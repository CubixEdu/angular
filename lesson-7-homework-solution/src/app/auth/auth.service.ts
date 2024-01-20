import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedInUser?: User;

  constructor(private router: Router) {
    const user = localStorage.getItem(`user`);

    if(user) {
      this._loggedInUser = JSON.parse(user);
    }
  }

  get loggedInUser() {
    return this._loggedInUser;
  }

  login(username: string) {
    this._loggedInUser = {username};
    localStorage.setItem(`user`, JSON.stringify(this.loggedInUser));
    this.router.navigateByUrl('');
  }

  logout() {
    this._loggedInUser = undefined;
    localStorage.removeItem(`user`);
    this.router.navigateByUrl('login');
  }
}