import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ){
      Loginservice.getDogs().subscribe((sub) => {
        console.log(sub);
        this.apiData = sub;
      });
    }
    back(){
      this.router.navigate(['/home'])
    }
}
