import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apiData: any;
constructor(
  private router: Router,
  private Loginservice: LoginService
  ){
    Loginservice.getCatFact().subscribe((sub) => {
      console.log(sub);
      this.apiData = sub;
    });
  }
  onFactApi(){
    this.router.navigate(['/fact-api']);
  }
  onCoinDesk(){
    this.router.navigate(['/coin-desk']);
  }
  onBored(){
    this.router.navigate(['/bored']);
  }
  onAgify(): void{
    this.router.navigate(['/agify']);
  }
  onDogs(){
    this.router.navigate(['/dogs']);
  }
  onJokes(){
    this.router.navigate(['/jokes']);
  }
  onRandomUser(){
    this.router.navigate(['/random-user']);
  }
  onNationalize (): void{
    this.router.navigate(['/nationalize']);
  }
  onIpinfo(){
    this.router.navigate(['/ipinfo']);
  }
  onDataUsa(){
    this.router.navigate(['/datausa']);
  }
  onUniversities(){
    this.router.navigate(['/universities']);
  }
 
}

