import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent {

  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ){
      Loginservice.getJokes().subscribe((sub) => {
        console.log(sub);
        this.apiData = sub;
      });
    }
    back(){
      this.router.navigate(['/home'])
    }
}
