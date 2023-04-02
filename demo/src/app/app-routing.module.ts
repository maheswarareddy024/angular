import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FactApiComponent } from './fact-api/fact-api.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { CoindeskComponent } from './coin-desk/coindesk.component';
import { BoredComponent } from './bored/bored.component';
import { AgifyIoComponent } from './agify.io/agify.io.component';
import { DogsComponent } from './dogs/dogs.component';
import { JokesComponent } from './jokes/jokes.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { NationalizeIoComponent } from './nationalize.io/nationalize.io.component';
import { IpinfoComponent } from './ipinfo/ipinfo.component';
import { DatausaComponent } from './datausa/datausa.component';
import { UniversitiesListComponent } from './universities/universities-list.component';


const routes: Routes = [
  {
    path:'',
    component: LogInPageComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'fact-api',
    component: FactApiComponent
  },
  {
    path: 'log-in-page',
    component: LogInPageComponent
  },
  {
    path: 'coin-desk',
    component: CoindeskComponent
  },
  {
    path:'bored',
    component:BoredComponent
  },
  {
    path:'agify',
    component:AgifyIoComponent
  },
  {
    path:'dogs',
    component:DogsComponent
  },
  {
    path:'jokes',
    component:JokesComponent
  },
  {
    path:'random-user',
    component:RandomUserComponent
  },
  {
    path:'nationalize',
    component:NationalizeIoComponent

  },
  {
    path:'ipinfo',
    component:IpinfoComponent
  },
  {
    path:'datausa',
    component:DatausaComponent
  },
  {
    path:'universities',
    component:UniversitiesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }