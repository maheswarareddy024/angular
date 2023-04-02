import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})
export class UniversitiesListComponent {
  apiData: any
  constructor(
    private router: Router,
    private Loginservice: LoginService
    ){
      Loginservice.getUniversities().subscribe((sub: any) => {
        console.log(sub);
        this.apiData = sub;
      });
    }
    back(){
      this.router.navigate(['/home'])
    }

}
function list() {
  throw new Error('Function not implemented.');
}

