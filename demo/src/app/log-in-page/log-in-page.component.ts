import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent {
  title = 'demoApp';
  email!:string;
  password!:string;
  remail!:string;
  rpassword!:string;
  rcpassword!:string;
 
   constructor(private snackBar:MatSnackBar,
     private router: Router,
     private Loginservice: LoginService
     ){
 
   }
   register() {
 
   }
   login() {
     if(this.email=="admin" && this.password=="admin"){
         this.snackBar.open('Login Successful','',{duration:1000})
         this.router.navigate(['/home'])
     }else{
       this.snackBar.open('Login error','',{duration:1000})
     }
   }
 }
 
 
