import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { [username: string]: string } = {
    'admin': '1234'  // usuario
  };

  constructor() { }

  login(username: string, password: string): boolean {
    return this.users[username] === password;
  }

  resetPassword(username: string, newPassword: string): boolean {
    if (this.users[username]) {
      this.users[username] = newPassword;
      return true;
    }
    return false;
  }

  getUsername(): string | null {

    return null;
  }
}
