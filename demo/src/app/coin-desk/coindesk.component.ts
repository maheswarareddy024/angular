import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-coindesk',
  templateUrl: './coindesk.component.html',
  styleUrls: ['./coindesk.component.css']
})
export class CoindeskComponent {

  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ) {
      this.Loginservice.getCoinDesk().subscribe((data) => {
        console.log(data);
        this.apiData = data;
      });
    }



  back(){
    this.router.navigate(['/home'])

  }
 
}
