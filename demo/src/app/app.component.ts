// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'demo';
// }
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
 /*  title = 'demoApp';
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
  } */
}

