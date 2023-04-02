// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FactApiComponent } from './fact-api/fact-api.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { CoindeskComponent } from './coin-desk/coindesk.component';
import { BoredComponent } from './bored/bored.component';
import { AgifyIoComponent } from './agify.io/agify.io.component';
import { DogsComponent } from './dogs/dogs.component';
import { JokesComponent } from './jokes/jokes.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { NationalizeIoComponent } from './nationalize.io/nationalize.io.component';
import { DatausaComponent } from './datausa/datausa.component';
import { IpinfoComponent } from './ipinfo/ipinfo.component';
import { UniversitiesListComponent } from './universities/universities-list.component';






@NgModule({
  declarations: [
    AppComponent,
    FactApiComponent,
    LogInPageComponent,
    CoindeskComponent,
    BoredComponent,
    AgifyIoComponent,
    DogsComponent,
    JokesComponent,
    RandomUserComponent,
    NationalizeIoComponent,
    DatausaComponent,
    IpinfoComponent,
    UniversitiesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }