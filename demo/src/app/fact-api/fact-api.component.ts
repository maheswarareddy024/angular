import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-fact-api',
  templateUrl: './fact-api.component.html',
  styleUrls: ['./fact-api.component.css']
})
export class FactApiComponent {
  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ){
      Loginservice.getCatFact().subscribe((sub) => {
        console.log(sub);
        this.apiData = sub;
      });
    }


   
   


  back(){
    this.router.navigate(['/home'])
  }

}
