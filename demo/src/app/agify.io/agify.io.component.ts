import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-agify.io',
  templateUrl: './agify.io.component.html',
  styleUrls: ['./agify.io.component.css']
})
export class AgifyIoComponent {
  
  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ) {
      this.Loginservice.getAgify().subscribe((data) => {
        console.log(data);
        this.apiData = data;
      });
}
back(){
  this.router.navigate(['/home'])

}

}
