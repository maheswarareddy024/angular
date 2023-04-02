import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nationalize.io',
  templateUrl: './nationalize.io.component.html',
  styleUrls: ['./nationalize.io.component.css']
})
export class NationalizeIoComponent {
  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ){
      Loginservice.getNationalize().subscribe((sub) => {
        console.log(sub);
        this.apiData = sub;
      });
    }
    back(){
      this.router.navigate(['/home'])
    }

}
