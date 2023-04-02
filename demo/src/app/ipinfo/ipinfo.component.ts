import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-ipinfo',
  templateUrl: './ipinfo.component.html',
  styleUrls: ['./ipinfo.component.css']
})
export class IpinfoComponent {
  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ){
      Loginservice.getIpinfo().subscribe((sub) => {
        console.log(sub);
        this.apiData = sub;
      });
    }


   
   


  back(): void{
    this.router.navigate(['/home'])
  }


}
