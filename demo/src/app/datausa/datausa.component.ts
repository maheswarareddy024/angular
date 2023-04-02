import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-datausa',
  templateUrl: './datausa.component.html',
  styleUrls: ['./datausa.component.css']
})
export class DatausaComponent {

  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ){
      Loginservice.getDatausa().subscribe((sub) => {
        console.log(sub);
        this.apiData = sub;
      });
    }
    back(){
      this.router.navigate(['/home'])
    }
}
