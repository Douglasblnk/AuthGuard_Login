import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  public canActivate(): boolean {

    if (localStorage.getItem('login')) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
