import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Asegúrate de ajustar la ruta según tu estructura

@Component({
  selector: 'app-contrareset',
  templateUrl: './contrareset.page.html',
  styleUrls: ['./contrareset.page.scss'],
})
export class ContraresetPage {
  username: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRecover() {
    if (this.newPassword === this.confirmNewPassword) {
      if (this.authService.resetPassword(this.username, this.newPassword)) {
        alert('Contraseña restablecida exitosamente');
        this.router.navigate(['/login']);
      } else {
        alert('El nombre de usuario no existe');
      }
    } else {
      alert('Las contraseñas no coinciden');
    }
  }
}
