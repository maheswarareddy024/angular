import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent {

  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ) {
      this.Loginservice.getBored().subscribe((data) => {
        console.log(data);
        this.apiData = data;
      });
}
back(){
  this.router.navigate(['/home'])

}

}

