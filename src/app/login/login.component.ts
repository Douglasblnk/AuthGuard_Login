import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    inputLogin: new FormControl(),
    inputSenha: new FormControl(),

  });

  constructor(private formBuilder: FormBuilder , private router: Router) {
    this.createForm();
   }

   createForm() {
      this.loginForm = this.formBuilder.group({
        inputLogin: '',
        inputSenha: ''
      });
      localStorage.removeItem('login');
      localStorage.removeItem('senha');
    }

    logar() {
        localStorage.setItem('login' , this.loginForm.get('inputLogin').value);
        localStorage.setItem('senha' , this.loginForm.get('inputSenha').value);

        this.router.navigate(['profile']);
    }

  ngOnInit() {
  }

}
