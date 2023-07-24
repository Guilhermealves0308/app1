import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login(email: string, password: string) {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(email, password);
      if (user) {
        this.router.navigateByUrl('/home');
      }
    } catch (error) {
      console.log('Erro de login:', error);
    }
  }
}
