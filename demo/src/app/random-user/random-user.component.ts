import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent {

  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ){
      Loginservice.getRandomUser().subscribe((sub) => {
        console.log(sub);
        this.apiData = sub;
      });
    }
    back(){
      this.router.navigate(['/home'])
    }
}
